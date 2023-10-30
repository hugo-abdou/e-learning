<?php

namespace App\Models;

use App\Enums\CourseStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    protected $guarded = [];
    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'thumbnail_url',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    protected $dates = ['schedule_at', 'close_at'];

    /**
     * Get the default profile photo URL if no profile photo has been uploaded.
     *
     * @return string
     */
    protected function getThumbnailUrlAttribute()
    {
        return $this->thumbnail;
    }

    function error(\Throwable $th)
    {
        $this->update([
            'status' => CourseStatus::Error,
            'data->error' => $th->getMessage()
        ]);
    }
    function close()
    {
        $this->update(['status' => CourseStatus::Closed]);
    }
    function publish()
    {
        $this->update(['status' => CourseStatus::Published]);
    }


    public function isPublished()
    {
        return $this->status == CourseStatus::Published;
    }
    public function isDraft()
    {
        return $this->status == CourseStatus::Draft;
    }
    public function isScheduled()
    {
        return $this->status == CourseStatus::Scheduled;
    }

    /**
     * Get the user that owns the Cour
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    /**
     * Get all of the chapters for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function chapters(): HasMany
    {
        return $this->hasMany(Chapter::class)->orderBy('order', 'asc');
    }
}
