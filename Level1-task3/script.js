function convert() {
    // Get the Celsius input value
    var celsius = parseFloat(document.getElementById('celsiusInput').value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Calculate Fahrenheit
        var fahrenheit = (celsius * 9/5) + 32;

        // Display the result
        document.getElementById('result').textContent = 'Temperature in degree Fahrenheit is: ' + fahrenheit.toFixed(2);
    } else {
        alert('Please enter a valid number for Celsius.');
    }
}
function convert_F() {
    // Get the Fahrenheit input value
    var fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);

    // Check if the input is a valid number
    if (!isNaN(fahrenheit)) {
        // Calculate Celsius
        var celsius = (fahrenheit - 32) * 5/9;

        // Display the result
        document.getElementById('result2').textContent = 'Temperature in degree Celsius is: ' + celsius.toFixed(2);
    } else {
        alert('Please enter a valid number for Fahrenheit.');
    }
}
