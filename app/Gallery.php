<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $guarded = [];
    public $timestamps = false;
    
    public function state(){
        return $this->belongsTo(State::class);
    }
}
