<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    public function admin()
    {
        return $this->belongsTo(Setting::class);
    }

    protected $fillable = [
        'name',
        'logo',
        'description',
        'contactinfo',
    ];
}