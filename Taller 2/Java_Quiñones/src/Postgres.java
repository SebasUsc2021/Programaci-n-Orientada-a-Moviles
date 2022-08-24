import abstracts.BDatos;
import interfaces.Operaciones;

public class Postgres extends BDatos implements Operaciones {
    @Override
    public void Conectar() {

    }

    @Override
    public void Consultar() {

    }

    @Override
    public void Insertar() {

    }

    @Override
    public void Eliminar() {

    }

    @Override
    public String saludar() {
        return "Hola Desde Postgres";
    }
}
