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
            'path' => $this->path,
            'thumb_url' => $this->getThumbUrl()
        ]);
    }

    public function getMediaUrls()
    {
        switch (Media::checkFileType($this->mime_type)) {
            case 'video':
                return [
                    'duration' => $this->duration ?? 0,
                    'status' => $this->status,
                    'low_url' => $this->getLowUrl(),
                ];
            case 'image':
                return [
                    'sm_url' => $this->getSmUrl(),
                    'url' => $this->getUrl(),
                ];
            default:
                return ['url' => $this->getUrl()];
        }
    }
}
