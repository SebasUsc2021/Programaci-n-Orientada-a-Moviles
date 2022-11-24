<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $error = "";

        try {
            $students = DB::select("SELECT * FROM t001_usuarios");
        } catch (\Throwable $th) {
            $error = $th->getMessage();
        }

        return response()->json(["result" => $students, "error" => $error]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $error = "";
        $student = false;

        try {
            DB::table('t001_usuarios')->insert([
                "c001_cedula" => $request["c001_cedula"],
                "c001_contrasena" => $request["c001_contrasena"],
                "c001_nombre" => $request["c001_nombre"],
                "c001_email" => $request["c001_email"],
                "c001_foto" => $request["c001_foto"],
            ]);
            $student = true;
        } catch (\Throwable $th) {
            $error = $th->getMessage();
        }

        return response()->json(["result" => $student, "error" => $error]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $error = "";

        try {
            $student = DB::select("SELECT * FROM t001_usuarios WHERE c001_id = ?", array($id))[0];
        } catch (\Throwable $th) {
            $error = $th->getMessage();
        }

        return response()->json(["result" => $student, "error" => $error]);
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
        $error = "";
        $student = false;

        try {
            DB::select("UPDATE t001_usuarios SET c001_contrasena = ? WHERE c001_id = ?", array($request["c001_contrasena"], $id));
            $student = true;
        } catch (\Throwable $th) {
            $error = $th->getMessage();
        }

        return response()->json(["result" => $student, "error" => $error]);
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

    public function login(Request $request)
    {
        $error = "";
        $data = false;
        $student = DB::select("SELECT * FROM t001_usuarios WHERE c001_email = ? AND c001_contrasena = ?", array($request->email, $request->password));

        if (count($student) > 0) {
            $data = $student[0];
        }

        return response()->json(["result" => $data, "error" => $error]);
    }
}
