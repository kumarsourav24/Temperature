function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheit = (celsiusInput.value * 9/5) + 32;
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
}
