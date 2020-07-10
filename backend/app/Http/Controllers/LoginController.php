<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request) {
        $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)){
            $userData = DB::table('users')->where('email', $request->email)->select('id', 'email', 'name', 'image')->first();

            return response()->json($userData, 200);
        }
        return response()->json("Falha no Login, tente novamente!", 440);


    }
}
