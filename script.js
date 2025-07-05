document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    // Constante de conversión de Ft-Lbs a Joules
    const JOULES_CONVERSION_FACTOR = 1.35582;
    // Constante para la fórmula de energía cinética en sistema imperial
    const KINETIC_ENERGY_CONSTANT = 450240;

    calculateBtn.addEventListener('click', () => {
        // Obtener valores de los inputs
        const weight = parseFloat(document.getElementById('weight').value);
        const velocity = parseFloat(document.getElementById('velocity').value);

        // Validar entradas
        if (isNaN(weight) || isNaN(velocity)) {
            resultDiv.innerHTML = 'Error: por favor, ingrese todos los valores.';
            resultDiv.style.backgroundColor = '#ffebee';
            resultDiv.style.borderColor = '#ffcdd2';
            resultDiv.style.display = 'block';
            return;
        }

        if (weight <= 0 || velocity <= 0) {
            resultDiv.innerHTML = 'Error: el peso y la velocidad deben ser mayores que cero.';
            resultDiv.style.backgroundColor = '#ffebee';
            resultDiv.style.borderColor = '#ffcdd2';
            resultDiv.style.display = 'block';
            return;
        }

        // Calcular energía en Ft-Lbs
        const ftLbs = (weight * velocity * velocity) / KINETIC_ENERGY_CONSTANT;
        
        // Convertir a Joules
        const joules = ftLbs * JOULES_CONVERSION_FACTOR;

        // Mostrar resultado
        resultDiv.innerHTML = `
            <span style="font-size: 1.4em;">${ftLbs.toFixed(2)} Ft-Lbs</span>
            <br>
            <span style="font-size: 1.2em;">(${joules.toFixed(2)} Joules)</span>
        `;
        
        // Estilo y visualización del resultado
        resultDiv.style.backgroundColor = '#e9f5ff';
        resultDiv.style.borderColor = '#b3d7ff';
        resultDiv.style.display = 'block';
    });
});