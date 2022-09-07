package view;

import javax.swing.*;

public class CalculatorFrame extends JFrame {
    public CalculatorFrame() {
        // Crear el titulo
        setTitle("Calculadora");

        // Crear panel
        CalculatorPanel panel = new CalculatorPanel();
        add(panel);
        pack();

        // Configuramos el tamaño
        setSize(350, 350);
    }
}
