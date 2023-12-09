<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'permissions' => $this->getPermissionNames(),
            'users' => $this->whenLoaded('users', $this->users)->map(fn ($item) => ['id' => $item->id, 'avatar' => $item->profile_photo_url, 'name' => $item->name]),
        ];
        // if ($this->name == 'FE') {
        // dd($this->data);
        // }
        if (isset($this->data['payment_link'])) $data['payment_link'] = $this->data['payment_link'];
        if (isset($this->data['jvzoo_ids'])) $data['jvzoo_ids'] = $this->data['jvzoo_ids'];
        if (isset($this->data['code'])) $data['code'] = $this->data['code'];
        if (isset($this->data['max_projects'])) $data['max_projects'] = $this->data['max_projects'];
        if (isset($this->data['max_agents'])) $data['max_agents'] = $this->data['max_agents'];
        if (isset($this->data['max_subusers'])) $data['max_subusers'] = $this->data['max_subusers'];
        if (isset($this->data['max_whitelabel'])) $data['max_whitelabel'] = $this->data['max_whitelabel'];
        if (isset($this->data['canAddAgent'])) $data['canAddAgent'] = $this->data['canAddAgent'];
        if (isset($this->data['canAddWhitelabel'])) $data['canAddWhitelabel'] = $this->data['canAddWhitelabel'];
        if (isset($this->data['storage'])) $data['storage'] = $this->data['storage'];
        if (isset($this->data['email_subject'])) $data['email_subject'] = $this->data['email_subject'];
        if (isset($this->data['email_content'])) $data['email_content'] = $this->data['email_content'];

        return $data;
    }
}
