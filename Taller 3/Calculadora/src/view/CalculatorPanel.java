package view;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CalculatorPanel extends JPanel {
    private final JButton display;
    private final JPanel panel;
    private int result;
    private String lastCommand;
    private boolean start;

    public CalculatorPanel() {
        // Configurar el maquetado
        setLayout(new BorderLayout());

        // Iniciamos con 0
        result = 0;
        lastCommand = "=";
        start = true;

        // Creamos un boton para ver el resultado
        display = new JButton("0");
        display.setEnabled(false);
        display.setFont(display.getFont().deriveFont(50f));
        add(display, BorderLayout.NORTH);

        // Escribir nombre
        JLabel footer = new JLabel("Created By: Sebastian Quiñones");
        add(footer, BorderLayout.SOUTH);

        // Crear las acciones
        ActionListener insert = new InsertAction();
        ActionListener command = new CommandAction();

        // crear los botones
        panel = new JPanel();
        // crear un layout de celdas
        panel.setLayout(new GridLayout(4, 4));
        addButton("7", insert);
        addButton("8", insert);
        addButton("9", insert);
        addButton("/", command);
        addButton("4", insert);
        addButton("5", insert);
        addButton("6", insert);
        addButton("*", command);
        addButton("1", insert);
        addButton("2", insert);
        addButton("3", insert);
        addButton("-", command);
        addButton("0", insert);
        addButton(".", insert);
        addButton("=", command);
        addButton("+", command);
        add(panel, BorderLayout.CENTER);
    }

    private void addButton(String label, ActionListener listener) {
        JButton button = new JButton(label);
        button.setFont(button.getFont().deriveFont(20f));
        button.addActionListener(listener);

        panel.add(button);
    }

    private class InsertAction implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            String input = e.getActionCommand();

            if (start) {
                display.setText("");
                start = false;
            }

            display.setText(display.getText() + input);
        }
    }

    private class CommandAction implements ActionListener {
        public void actionPerformed(ActionEvent event) {
            String command = event.getActionCommand();

            if (start) {
                if (command.equals("-")) {
                    display.setText(command);
                    start = false;
                } else {
                    lastCommand = command;
                }
            } else {
                calculate(Integer.parseInt(display.getText()));
                lastCommand = command;
                start = true;
            }
        }
    }

    public void calculate(int x) {
        switch (lastCommand) {
            case "+" -> result += x;
            case "-" -> result -= x;
            case "*" -> result *= x;
            case "/" -> result /= x;
            case "=" -> result = x;
        }


        display.setText(result + "");
    }
}
