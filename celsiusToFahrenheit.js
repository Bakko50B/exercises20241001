"use strict";

/*
Skapa en funktion som tar ett heltal i form av grader i Celsius (°C) som argument och omvandlar och returnerar antal grader i Farenheit (°F).

Formel för att omvandla Celsius till Farenheit: °F = °C * 1.8 + 32

Skriv sedan ut antal grader till skärmen.

*/

function celsiusToFahrenheit(tempInC) {
     return tempInC * 1.8 +32;

}

console.log(celsiusToFahrenheit(20));