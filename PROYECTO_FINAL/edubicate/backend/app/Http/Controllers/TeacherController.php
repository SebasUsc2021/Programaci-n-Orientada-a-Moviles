<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{
    public function index(Request $request)
    {
        $error = "";

        try {
            $teacher = DB::select("SELECT * FROM t003_docentes WHERE c003_id = ?", array($request->id))[0];
            $teacher->info = DB::select("SELECT * FROM t002_cursos WHERE c003_id_docente = ?", array($teacher->c003_id));
        } catch (\Throwable $th) {
            $error = $th->getMessage();
        }

        return response()->json(["result" => $teacher, "error" => $error]);
    }
}
