/*Example Usage of parseFloat */

let floatNum = '1.51234';

console.log(Number.parseFloat(floatNum));
/*1.51234*/

let floatNum = '3';
console.log(Number.parseFloat(floatNum));
/*3*/

let fakeNum = 'notFloat';
console.log(Number.parseFloat(fakeNum));
/*NaN*/

console.log(Number.parseFloat(Infinity));
/*Infinity*/

/*Example Usage of toExponential */
console.log(Number.parseInt("2").toExponential(2));
/*2.00e+0*/

/*Example Usage of toPrecision */
console.log(Number.parseFloat("34.6342").toPrecision(3));
/*34.6*/

console.log(Number.parseFloat("34.6342").toPrecision(0));
/* results in an error */
