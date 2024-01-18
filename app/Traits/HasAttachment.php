<?php

namespace App\Traits;

use App\Models\Media;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait HasAttachment
{

    public function attachments(): BelongsToMany
    {
        return $this->belongsToMany(Media::class, table: 'resource_media', relatedPivotKey: 'attachment_id', foreignPivotKey: 'resource_id')
            ->wherePivot('resource_type', get_class($this))
            ->withPivot(['type', 'download', 'visibility', 'watermark', 'name'])->withPivotValue(['resource_type' => get_class($this)]);
    }
}
