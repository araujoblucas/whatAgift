<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
Use Exception;



class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return "Usuários";
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {

            DB::table('users')->insert(
                [
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'image' => $request->image
                ]
            );

        } catch (\Throwable $e) {
            return "Já email cadastrado!";
        }

        DB::commit();
        return "Inserido com Sucesso";

    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $requests = $request;
        $crendentials = $request->only('email', 'password');
        if(Auth::attempt($crendentials)) {

            DB::beginTransaction();

            DB::table('users')->where('id', $request->id)->update(
            [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->newPassword),
                'image' => $request->image
            ]);

            DB::commit();
            return response()->json("Alteração de dados concluida com sucesso!", 200);

        } else {
            return response()->json("Erro ao atualizar, verifique sua senha", 400);
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
