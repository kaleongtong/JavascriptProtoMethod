/* Example Usage of lastIndexOf */

let sent = 'I love Hot Dog because Hot Dog is tasty.';

let searchTerm = 'Hot';

console.log('The index of searchTerm is ' + sent.lastIndexOf(searchTerm));
/* The index of searchTerm is 23 */

let sent = 'I';

console.log('Sentence reset. The index of searchTerm is ' + sent.lastIndexOf(searchTerm));
/* The index of searchTerm is -1 */


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

/*Example Usage of slice */
let sent = 'I am slicing this sentence apart.';

console.log(sent.slice(2));
/*am slicing this sentence apart.*/

console.log(sent.slice(5,12));
/*slicing*/


let sent = '';
console.log(sent.slice(0, -1));
/* */


/*Example Usage of match*/
let sent = 'I have 22 apples and 5 oranges today already.';
let regex = /[0-9]+/g;
console.log(sent.match(regex));
/*[22]*/

let sent = '12 apples, -5 oranges, and -40 bananas';
let regex = /[0-9]{2}/g;
console.log(sent.match(regex));
/*[12, 40] */ 


/*Example Usage of strike*/
let str = "strike!";
console.log(str.strike());
/*<strike>strike!</strike>*/
