<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'position',
        'description',
        'stack',
/*        'title_en',
        'description_en',
        'stack_en',
        'position_en',
*/
    ];



}
