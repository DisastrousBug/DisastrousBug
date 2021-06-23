<?php

namespace Database\Factories;

use App\Models\MyCase;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'slug' => $this->faker->slug(),
            'stack' => $this->faker->unique()->jobTitle(),
            #'description' => $this->faker->realTextBetween(),
            'link' => $this->faker->unique()->url,
            'repo' => $this->faker->unique()->url,
        ];
    }
}
