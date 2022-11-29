<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'label' => Arr::random(['Destinations', 'Conseils aux voyageurs', 'Test et Avis', 'Esprit d\'avemture', 'Vivre de sa passion', 'Le Mag'])
        ];
    }
}