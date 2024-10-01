"use strict";

/* 
I Fibonaccis talföljd är de två första elementet 1 och 1. 
Varje nästkommande element kommer därefter vara summan av de två föregående.

Illustration:

Fibonaccis talföljd
*/

// antalet gånger som parameter in i funktionen

function fibonacci(antal) {
    let arrayFib = [1, 1]; // De två första värdena i talserien är 1 och 1 

    for (let i = 0; i < antal; i++) {
        arrayFib.push(arrayFib[arrayFib.length - 2] + arrayFib[arrayFib.length - 1])
        console.log(arrayFib[arrayFib.length - 3] + " + " + arrayFib[arrayFib.length - 2] + " = " + arrayFib[arrayFib.length - 1]);
    }
}


fibonacci(10); // S