// function convert(){
//     let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
//     let celcius = parseFloat(document.getElementById('celcius').value);

//     //convert//
//     let celciusValue = (fahrenheit - 32) * (5 / 9);
//     document.getElementById('celcius').value = celcius;

//     let farenheitvalue = (celcius * (9 / 5));
//     document.getElementById('fahrenheit').value = fahrenheit;
// }

function convertToCelcius(){

    let fahrenheitValue = parseFloat(document.getElementById('fahrenheit').value);
                var celciusValue = (fahrenheitValue - 32) * (5/9);
                document.getElementById('celcius').value = celciusValue;

}
function convertToFahrenheit(){

    let celciusValue = parseFloat(document.getElementById('celcius').value);
                var fahrenheitValue = (celciusValue * (9/5));
                document.getElementById('fahrenheit').value = fahrenheitValue;

}