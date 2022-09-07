package view;

import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        // Creamos la calculadora
        CalculatorFrame frame = new CalculatorFrame();
        // Que pasa cuando se cierra
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // Mostrar la calculadora
        frame.setVisible(true);
    }
}
