<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoriesWithPathsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {


        return [
            'id' => $this->id,
            'name' => $this->name,
            "path" => $this->getPath($this),
        ];
    }

    public function getPath($category)
    {
        $path = $category->name;
        if ($parent = $category->parent) {
            $path = $this->getPath($parent) . ' > ' . $path;
        }
        return $path;
    }
}
