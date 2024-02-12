<?php

namespace App\Http\Resources;

use App\Models\Media;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class AttachmentResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        $download = !!$this->pivot->download;
        $data =  array_merge($this->getMediaUrls(), [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'type' => Media::checkFileType($this->mime_type),
            "name" => $this->pivot->name,
            "slug" => $this->pivot->slug,
            'status' => $this->status,
            "download" => $download,
            "visibility" => json_decode($this->pivot->visibility ?? '[]'),
            "watermark" => $this->pivot->watermark,
            "width" => $this->data['width'] ?? 0,
            "height" => $this->data['height'] ?? 0,
        ]);
        if ($download) $data['path'] = Storage::disk('public')->url($this->path);
        return $data;
    }

    public function getMediaUrls()
    {
        switch (Media::checkFileType($this->mime_type)) {
            case 'video':
                return [
                    'duration' => $this->data['duration'] ?? 0,
                    'url' => $this->getUrl(),
                    'thumb_url' => $this->getThumbUrl(),
                    'preview_url' => $this->getPreviewUrl(),
                ];
            default:
                return [
                    'url' => $this->getUrl(),
                    'thumb_url' => $this->getThumbUrl()
                ];
        }
    }
}
