<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
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
        'start_date',
        'end_date',
        'position',
        'description',
    ];

    public function projects(){
        return $this->belongsToMany(Project::class, 'portfolio_projects');
    }

}
