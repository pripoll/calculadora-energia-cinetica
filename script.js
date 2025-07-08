document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    // Constantes de conversión
    const GRAMS_TO_GRAINS = 15.4324;
    const MPS_TO_FPS = 3.28084;
    const JOULES_CONVERSION_FACTOR = 1.35582;
    const KINETIC_ENERGY_CONSTANT = 450240;

    calculateBtn.addEventListener('click', () => {
        // Obtener valores y unidades de los inputs
        const weightInput = parseFloat(document.getElementById('weight').value);
        const velocityInput = parseFloat(document.getElementById('velocity').value);
        const weightUnit = document.getElementById('weightUnit').value;
        const velocityUnit = document.getElementById('velocityUnit').value;

        // Validar entradas numéricas
        if (isNaN(weightInput) || isNaN(velocityInput)) {
            resultDiv.innerHTML = 'Error: por favor, ingrese todos los valores.';
            resultDiv.style.backgroundColor = '#ffebee';
            resultDiv.style.borderColor = '#ffcdd2';
            resultDiv.style.display = 'block';
            return;
        }

        if (weightInput <= 0 || velocityInput <= 0) {
            resultDiv.innerHTML = 'Error: el peso y la velocidad deben ser mayores que cero.';
            resultDiv.style.backgroundColor = '#ffebee';
            resultDiv.style.borderColor = '#ffcdd2';
            resultDiv.style.display = 'block';
            return;
        }

        // Convertir peso a grains si es necesario
        let weightInGrains = weightInput;
        if (weightUnit === 'grams') {
            weightInGrains = weightInput * GRAMS_TO_GRAINS;
        }

        // Convertir velocidad a FPS si es necesario
        let velocityInFps = velocityInput;
        if (velocityUnit === 'mps') {
            velocityInFps = velocityInput * MPS_TO_FPS;
        }

        // Calcular energía en Ft-Lbs usando las unidades base (grains y FPS)
        const ftLbs = (weightInGrains * velocityInFps * velocityInFps) / KINETIC_ENERGY_CONSTANT;
        
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
