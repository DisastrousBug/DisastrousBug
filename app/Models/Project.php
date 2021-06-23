<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    protected $fillable = [
        'title',
        'stack',
        'link',
        'repo',
        'description'
    ];

    public function portfolios(){
        return $this->belongsToMany(Portfolio::class, 'portfolio_projects');
    }


}
