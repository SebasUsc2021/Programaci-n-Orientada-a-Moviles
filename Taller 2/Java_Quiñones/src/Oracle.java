import abstracts.BDatos;
import interfaces.Operaciones;

public class Oracle extends BDatos implements Operaciones {
    public Oracle() {
        System.out.println("Contruyendo Oracle");
    }

    public Oracle(String mensaje) {
        System.out.println("Contruyendo Oracle con mensaje: " + mensaje);
    }

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
        return "Hola Desde Oracle";
    }
}
