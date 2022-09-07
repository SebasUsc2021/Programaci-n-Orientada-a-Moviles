package com.example.formlogin;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    Button Enviar;

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
        Enviar= findViewById(R.id.Enviar);

        Enviar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {


                Intent i = new Intent( MainActivity.this, MainActivity2.class);
                startActivity(i);
            }
        });
    }

}