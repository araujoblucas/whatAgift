<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class apiController extends Controller
{
    public function home() {
        $arr =  array(
            array('id' => 1,
                'dado' => 'ok',
                'description' => 'test test test'),
        );
        return response()->json($arr);
    }
}
