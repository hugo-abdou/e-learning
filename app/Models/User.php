<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Laravel\Jetstream\HasProfilePhoto;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use HasRoles;
    // use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'status',
        'admin_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function isSupperAdmin()
    {
        return $this->hasRole('supper-admin');
    }
    public function isAdmin()
    {
        return $this->hasRole('admin');
    }
    public function isStudent()
    {
        return $this->hasRole('student');
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    /**
     * Get all of the categories for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }


    /**
     * Get all of the messages for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }


    /**
     * Get all of the chats for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function chats(): BelongsToMany
    {
        return $this->belongsToMany(Chat::class, 'chat_user');
    }


    /**
     * Get all of the courses for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function courses(): HasMany
    {
        return $this->hasMany(Course::class, 'author_id');
    }


    /**
     * Get all of the ingagedCourses  for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function ingagedCourses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, 'user_course_progress', 'user_id', 'course_id')->withPivot(['progress']);
    }

    /**
     * Get all of the quizzes for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function quizzes(): HasMany
    {
        return $this->hasMany(Quiz::class, 'author_id');
    }
    /**
     * Get all of the quizAttempts for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function quizAttempts(): HasMany
    {
        return $this->hasMany(UserQuizAttempt::class);
    }
    /**
     * Get all of the questionAttempts for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function questionAttempts(): HasMany
    {
        return $this->hasMany(UserQuestionAttempt::class);
    }

    public function coursesAttempts()
    {
        return $this->hasMany(UserAttachmentProgress::class, 'user_id', 'id');
    }

    public function availableRoles()
    {
        return $this->hasMany(Role::class);
    }

    /**
     * Get the admin that owns the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function admin(): BelongsTo
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
    /**
     * Get all of the users for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'admin_id');
    }
    /**
     * Get all of the media for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function media(): HasMany
    {
        return $this->hasMany(Media::class);
    }
}
