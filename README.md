# Javascript Prototype functions 

In this repository I will demonstrate usage of several different Array and string prototype functions.

## Number Prototype Function Examples

### parseFloat 

This function takes a string and turns into float.

When a string that is not a number gets passed into parseFloat the function willreturn NaN(short abbreviation for 'Not a Number').

### toExpontential 

This function takes a number and prints it out in its exponential form

### toPrecision - 

This function will round up a number to a specified digit.

```shell
console.log(Number.parseFloat("34.6342").toPrecision(3));
/*34.6*/
```

## String Prototype Function Examples

### lastIndexOf 

This function returns the last index of the substring parameter.

Returns -1 if the substring was not found.


### includes 

This function return true if given substring exists within the string itself.

```shell

let sent = 'Check to see if the word exist or not';

let searchTerm = 'exist';

console.log('Does the term exist? ' + (sent.includes(searchTerm)? 'Yes' : 'No'));
//Does the term exist? Yes
```

### slice 

- this method return the substring from the given index to the end of the end sentence.

- If two parameters are given instead of one, this method will return the substring from the beginning index to the ending index.


### match 

- this method returns any matches when matching a string against a regular expression.


