# Javascript Prototype functions 

In this repository I will demonstrate usage of several different Array and string prototype functions.

## Number Prototype Function Examples

### parseFloat - this function takes a string and turns into float.

The following example takes the string version of a number and turns it into a float. 
let floatNum = '1.51234';

console.log(Number.parseFloat(floatNum));
/*1.51234*/

However, if we call parseFloat on a string that is not a number it will return a NaN(short abbreviation for 'Not a Number').

let fakeNum = 'notFloat';
console.log(Number.parseFloat(fakeNum));
/*NaN*/

There is another special case where if you call parseFloat on Infinity it will return Infinity instead.

console.log(Number.parseFloat(Infinity));
/*Infinity*/

### toExpontential - takes a number and prints it out in exponential orm
/*Example Usage of toExponential */
console.log(Number.parseInt("2").toExponential(2));
/*2.00e+0*/

### toPrecision - takes a number and rounds it up to a specified digit

console.log(Number.parseFloat("34.6342").toPrecision(3));
/*34.6*/

console.log(Number.parseFloat("34.6342").toPrecision(0));
/* results in an error */

## String Prototype Function Examples

### lastIndexOf - this function takes a term and returns the last index of the term in the string that calls it.

let sent = 'I love Hot Dog because Hot Dog is tasty.';

let searchTerm = 'Hot';

console.log('The index of searchTerm is ' + sent.lastIndexOf(searchTerm));
/* The index of searchTerm is 23 */

let sent = 'I';

console.log('Sentence reset. The index of searchTerm is ' + sent.lastIndexOf(searchTerm));
/* The index of searchTerm is -1 */

### includes - With a given string this method checks if the string exists within another string that calls it.

/*Example Usage of includes */

let sent = 'Check to see if the word exist or not';

let searchTerm = 'exist';

console.log('Does the term exist? ' + (sent.includes(searchTerm)? 'Yes' : 'No'));
/*Does the term exist? Yes*/

let searchTerm = '';
console.log('Does the term exist? ' + (sent.includes(searchTerm)? 'Yes' : 'No'));
/*Does the term exist? Yes*/

let searchTerm = 'null';
console.log('Does the term exist? ' + (sent.includes(searchTerm)? 'Yes' : 'No'));
/*Does the term exist? No*/

### slice - this method eliminates any character from the string that is before the given index and any that is after the second index if given.

let searchTerm = 'null';
console.log('Does the term exist? ' + (sent.includes(searchTerm)? 'Yes' : 'No'));
/*Does the term exist? No*/

/*Example Usage of slice */
let sent = 'I am slicing this sentence apart.';

console.log(sent.slice(2));
/*am slicing this sentence apart.*/

console.log(sent.slice(5,12));
/*slicing*/


let sent = '';
console.log(sent.slice(0, -1));
/* */

### match - this method returns any matches when matching a string against a regular expression.

let sent = 'I have 22 apples and 5 oranges today already.';
let regex = /[0-9]+/g;
console.log(sent.match(regex));
/*[22]*/

let sent = '12 apples, -5 oranges, and -40 bananas';
let regex = /[0-9]{2}/g;
console.log(sent.match(regex));
/*[12, 40] */
# JavascriptProtoMethod
