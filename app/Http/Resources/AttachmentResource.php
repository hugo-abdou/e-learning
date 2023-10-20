<?php

namespace App\Http\Resources;

use App\Models\Media;
use Illuminate\Http\Resources\Json\JsonResource;

class AttachmentResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        $download = !!$this->pivot->download;
        return array_merge($this->getMediaUrls(), [
            'id' => $this->id,
            'type' => Media::checkFileType($this->mime_type),
            "name" => $this->pivot->name,
            'status' => $this->status,
            "download" => !!$this->pivot->download,
            "visibility" => json_decode($this->pivot->visibility ?? '[]'),
            "watermark" => $this->pivot->watermark,
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
