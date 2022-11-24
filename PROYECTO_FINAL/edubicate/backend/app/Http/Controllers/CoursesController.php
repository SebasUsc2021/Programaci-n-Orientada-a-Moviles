<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CoursesController extends Controller
{
    public function index(Request $request)
    {
        $error = "";

        try {
            $courses = DB::select("SELECT * FROM t004_usuario_curso WHERE c001_id_usuario = ?", array($request->id));
            $data = [];

            foreach ($courses as $course) {
                $course->info = DB::select("SELECT * FROM t002_cursos WHERE c002_id = ?", array($course->c002_id_curso))[0];
                $data[] = $course;
            }
        } catch (\Throwable $th) {
            $error = $th->getMessage();
        }

        return response()->json(["result" => $data, "error" => $error]);
    }
}
