<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analytic extends Model
{
    use HasFactory;

    protected $guarded = [];

    function increaseCount(): void
    {
        $this->count++;
        $this->save();
    }
    function decreaseCount(): void
    {
        $this->count--;
        $this->save();
    }
}
