<?php

namespace App\Http\Controllers\Api;

use App\Enums\MediaStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Jobs\ProcessImageMediaJob;
use App\Jobs\ProcessVideoMediaJob;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\File as HttpFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class ResumableUploadController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if ($request->isMethod('GET')) return $this->chunkCheck($request);
        if ($request->isMethod('POST')) return $this->upload($request);
        throw new \Exception('Method not supported');
    }


    private function chunkCheck(Request $request): JsonResponse
    {
        $identifier = (string) preg_replace('/[^0-9a-zA-Z_]/', '', (string) $request->input('resumableIdentifier'));
        $chunk_number = (int) $request->input('resumableChunkNumber');
        $chunk_file = 'multipart_' . $identifier . '.part' . $chunk_number;
        if (Storage::disk('tmp')->exists($chunk_file)) {
            return response()->json(['message' => 'Chunk not found'], JsonResponse::HTTP_OK);
        }
        return response()->json(['message' => 'Chunk does not exists'], JsonResponse::HTTP_NO_CONTENT);
    }

    private function upload(Request $request): JsonResponse
    {
        // get server max upload size
        $upload_max_size = (int)ini_get('upload_max_filesize') || 1024 * 1024 * 1024; // 1GB

        $file_name = $request->input('resumableFilename', 'file');
        $destination = 'media/' . auth()->id() . '/' . $file_name;
        // $destination = $request->input('resumableRelativePath');
        $chunk_number = (int) $request->input('resumableChunkNumber');
        $total_chunks = (int) $request->input('resumableTotalChunks');
        $mimetype = (int) $request->input('resumableType');
        $identifier = (string) preg_replace('/[^0-9a-zA-Z_]/', '', (string) $request->input('resumableIdentifier'));
        $file = $request->file('file');

        if (!$file || !$file->isValid() || $file->getSize() > $upload_max_size) {
            return response()->json(['message' => 'Bad file'], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }
        $prefix = 'multipart_' . $identifier;

        if (Storage::disk('tmp')->exists($prefix . '_error')) {
            return response()->json(['message' => 'Chunk too big'], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        $stream = fopen($file->getPathName(), 'r');
        Storage::disk('tmp')->put($prefix . '.part' . $chunk_number, $stream);
        $uploaded_chunks =  Storage::disk('tmp')->allFiles();
        $uploaded_chunks = preg_grep('/^' . preg_quote($prefix, '/') . '/',  $uploaded_chunks);
        $chunks_size = 0;
        foreach ($uploaded_chunks as $uploaded_chunk) {
            $chunks_size += Storage::disk('tmp')->size($uploaded_chunk);
        }

        if ($chunks_size > $upload_max_size) {
            foreach ($uploaded_chunks as $uploaded_chunk) {
                Storage::disk('tmp')->delete($uploaded_chunk);
            }
            Storage::disk('tmp')->put($prefix . '_error', '');
            return response()->json(['message' => 'Chunk too big'], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        // if all the chunks are present, create final file and store it
        if (count($uploaded_chunks) >= $total_chunks) {
            $finalContent = '';
            for ($i = 1; $i <= $total_chunks; ++$i) {
                $finalContent .= Storage::disk('tmp')->get($prefix . '.part' . $i);
            }

            $res = Storage::disk('tmp')->put($destination, $finalContent, ['mimetype' => $mimetype]);

            if (!$res) {
                return response()->json(['message' => 'Error storing file'], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
            }

            // Delete the chunk files after combining them
            foreach ($uploaded_chunks as $uploaded_chunk) {
                Storage::disk('tmp')->delete($uploaded_chunk);
            }

            $media = $this->completedResponce($destination);
            $this->prosseceMedia($media);
            return response()->json(MediaResource::make(Media::find($media->id)), JsonResponse::HTTP_CREATED);
        }
        return response()->json(['message' => 'Uploaded'], JsonResponse::HTTP_OK);
    }


    private function completedResponce(string $uploadPath): Media
    {
        $file = new HttpFile(storage_path('app'  . DIRECTORY_SEPARATOR . 'tmp' . DIRECTORY_SEPARATOR . $uploadPath));
        $media = Media::create([
            'name' => pathinfo($file->getFilename(), PATHINFO_FILENAME),
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'size_total' => $file->getSize(),
            'disk' =>  disk(),
            'path' => str_replace('tmp' . DIRECTORY_SEPARATOR, '', $uploadPath),
            'status' => MediaStatus::Pending->value,
            'data->width' => "1080",
            'data->height' => "720",
            'conversions' => []
        ]);
        return $media;
    }
    private function prosseceMedia(Media $media): void
    {
        $type = Str::before($media->mime_type, '/');
        if ($type === 'application') {
            $content = Storage::disk('tmp')->get($media->path);
            Storage::disk($media->disk)->put($media->path, $content);
            $media->update([
                'status' => MediaStatus::Completed->value,
                'conversions' => [[
                    'engine' => 'pdf',
                    'path' => '/assets/pdf_placeholder.png',
                    'disk' => 'bunnycdn',
                    'size' => $media->size,
                    'name' => 'thumb',
                ]]
            ]);
            Storage::disk('tmp')->delete($media->path);
        }
        ProcessVideoMediaJob::dispatchIf($type === 'video', $media->id, ['library' => config('services.bunnycdn.library')]);

        // process Image and extract thumbnails and large images
        ProcessImageMediaJob::dispatchIf(
            $type === 'image',
            $media->id,
            ["thumb" => 300],
            ['disk' => disk(), 'path' => 'media/' . auth()->id()]
        );
    }
}
