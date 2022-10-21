package com.ingelist.mymenu;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button Send;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.overflow, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.Item1) {
            Intent screen_1 = new Intent(this, Pantalla_1.class);
            startActivity(screen_1);

            Toast.makeText(this, "Clicaste en boton 1", Toast.LENGTH_SHORT).show();
        } else if (id == R.id.Item2) {
            Intent screen_2 = new Intent(this, Pantalla_2.class);
           startActivity(screen_2);

            Toast.makeText(this, "Clicaste en boton 2", Toast.LENGTH_SHORT).show();
        } else if (id == R.id.Item3) {
            Intent screen_3 = new Intent(this, Pantalla_3.class);
            startActivity(screen_3);

            Toast.makeText(this, "Clicaste en boton 3", Toast.LENGTH_SHORT).show();
        }
        return super.onOptionsItemSelected(item);
    }
}