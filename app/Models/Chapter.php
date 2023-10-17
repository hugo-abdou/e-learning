<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Chapter extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $casts = [];

    /**
     * Get the user that owns the Chapter
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    // /**
    //  * The media that belong to the Chapter
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    //  */
    // public function media(): BelongsToMany
    // {
    //     return $this->belongsToMany(Media::class, relatedPivotKey: 'attachment_id', foreignPivotKey: 'chapter_id');
    // }

    public function attachments(): BelongsToMany
    {
        return $this->belongsToMany(Media::class, relatedPivotKey: 'attachment_id', foreignPivotKey: 'chapter_id');
    }
}
