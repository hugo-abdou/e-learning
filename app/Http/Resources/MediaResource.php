<?php

namespace App\Http\Resources;

use App\Models\Media;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        return array_merge($this->getMediaUrls(), [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->name,
            'type' => Media::checkFileType($this->mime_type),
            'status' => $this->status,
            "width" => $this->data['width'] ?? 0,
            "height" => $this->data['height'] ?? 0,
            "size" => $this->size,
        ]);
    }

    public function getMediaUrls()
    {
        // dd($this->getUrl());
        switch (Media::checkFileType($this->mime_type)) {
            case 'video':
                return [
                    'duration' => $this->data['duration'] ?? 0,
                    'url' => $this->getLowUrl(),
                    'thumb_url' => $this->getThumbUrl(),
                    'preview_url' => $this->getPreviewUrl(),
                ];
            case 'image':
                return [
                    'url' => $this->getUrl(),
                    'thumb_url' => $this->getThumbUrl(),
                ];
            default:
                return [
                    'url' => $this->getUrl(),
                    'thumb_url' => $this->getThumbUrl()
                ];
        }
    }
}
