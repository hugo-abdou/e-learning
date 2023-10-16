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
            'name' => $this->name,
            'mime_type' => $this->mime_type,
            'type' => Media::checkFileType($this->mime_type),
            'path' => $this->path,
            'status' => $this->status,
        ]);
    }

    public function getMediaUrls()
    {
        switch (Media::checkFileType($this->mime_type)) {
            case 'video':
                return [
                    'duration' => $this->data['duration'] ?? 0,
                    'url' => $this->getMasterUrl(),
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
