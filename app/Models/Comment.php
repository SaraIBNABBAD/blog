<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;


    protected $fillable = [
        'message',
        'email',
        'name',
        'website',
        'commentDate',
        'post_id',
        'user_id'
    ];
    public function author()
    {
        return $this->belongsTo(User::class);
    }
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function commentReplies()
    {
        return $this->hasMany(CommentReply::class);
    }



}