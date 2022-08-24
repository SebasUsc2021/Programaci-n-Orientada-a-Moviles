public class Main {
    public static void main(String[] args) {
        Oracle mi_oracle = new Oracle("Holis");

        System.out.println(mi_oracle.saludar());
        System.out.println(mi_oracle.saludar_papa());

        Postgres mi_postgres = new Postgres();

        System.out.println(mi_postgres.saludar());
        System.out.println(mi_postgres.saludar_papa());
    }
}
