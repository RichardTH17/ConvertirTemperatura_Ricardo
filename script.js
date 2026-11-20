const inputC = document.getElementById("gradosC");
const inputK = document.getElementById("gradosKI");
const inputF = document.getElementById("gradosFI");
const btnConvertir = document.getElementById("btnConvertir");

function convertirTemperatura() {
    const celsius = parseFloat(inputC.value);

    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.8 + 32;

    inputK.value = parseFloat(kelvin);
    inputF.value = parseFloat(fahrenheit);
}

btnConvertir.addEventListener("click", convertirTemperatura);

// Calcular automáticamente al abrir la página con el valor inicial (40 grados)
convertirTemperatura();