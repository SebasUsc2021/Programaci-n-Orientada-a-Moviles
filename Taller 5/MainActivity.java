package com.example.formlogin;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    public void enviar (View view){
        EditText NombreEditText = findViewById(R.id.NombreEditText);
        EditText PasscodeEditText = findViewById(R.id.PasscodeEditText);

        Log.i(  "Nombre", NombreEditText.getText().toString());
        Log.i("passcode", PasscodeEditText.getText().toString());
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}