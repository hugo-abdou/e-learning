<?php

namespace App\Http\Resources;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class StudentAttachmentResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        $download = !!$this->download;
        $data =  array_merge($this->getMediaUrls(), [
            'id' => $this->id,
            'uuid' => $this->media->uuid,
            'type' => Media::checkFileType($this->media->mime_type),
            "name" => $this->name,
            "slug" => $this->slug,
            "download" => $download,
            "visibility" => json_decode($this->visibility ?? '[]'),
            "watermark" => $this->watermark,
            "width" => $this->media->data['width'] ?? 0,
            "height" => $this->media->data['height'] ?? 0,
            "progress" => $this->progress?->progress_percent ?? 0
        ]);
        if ($download) $data['path'] = Storage::disk($this->media->disk)->url($this->media->path);
        return $data;
    }

    public function getMediaUrls()
    {
        switch (Media::checkFileType($this->media->mime_type)) {
            case 'video':
                return [
                    'duration' => $this->media->data['duration'] ?? 0,
                    'url' => $this->media->getUrl(),
                    'thumb_url' => $this->media->getThumbUrl(),
                    'preview_url' => $this->media->getPreviewUrl(),
                ];
            default:
                return [
                    'url' => $this->media->getUrl(),
                    'thumb_url' => $this->media->getThumbUrl()
                ];
        }
    }
}
