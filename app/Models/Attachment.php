<?php

namespace App\Models;

use App\Traits\HasAttachment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Attachment extends Model
{
    use HasFactory;

    protected $table = 'resource_media';

    protected $guarded = [];

    /**
     * Get the chapter that owns the Attachment
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function chapter(): BelongsTo
    {
        if ($this->resource_type !== Chapter::class) return null;
        return $this->belongsTo(Chapter::class, 'resource_id');
    }
    /**
     * Get the quiz that owns the Attachment
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function quiz(): BelongsTo
    {
        if ($this->resource_type !== Quiz::class) return null;
        return $this->belongsTo(Quiz::class, 'resource_id');
    }

    /**
     * Get the media associated with the Attachment
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function media(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'attachment_id', 'id');
    }

    /**
     * Get the progress associated with the Attachment
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function progress(): HasOne
    {
        return $this->hasOne(UserAttachmentProgress::class, 'attachment_id', 'id');
    }
}
