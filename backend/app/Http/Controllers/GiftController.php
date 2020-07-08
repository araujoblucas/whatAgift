<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GiftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $arr = array(
            array(
                "id" => 1,
                "titulo"=> "Dia dos Namorados",
                "imagem"=> "https://github.com/araujoblucas/whatAgift/blob/master/frontend/src/img/gift1.jpg?raw=true"
            ),
            array(
                "id"=> 2,
                "titulo"=> "Aniversário",
                "imagem"=> "https://github.com/araujoblucas/whatAgift/blob/master/frontend/src/img/gift2.jpg?raw=true"
            ),
            array(
                "id"=> 3,
                "titulo"=> "Dia dos Pais",
                "imagem"=> "https://github.com/araujoblucas/whatAgift/blob/master/frontend/src/img/gift3.jpg?raw=true"
            )
        );

        return response()->json($arr);
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
        //
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
    public function update(Request $request, $id)
    {
        //
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
