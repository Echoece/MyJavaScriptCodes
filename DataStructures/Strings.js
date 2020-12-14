'use strict'
// we can use either single or double quote, we can mix them inside as well
console.log('geeks"for"geeks');   // output: geeks"for"geeks

// backslash is the escape character as usual.
console.log('Hello \'\' World');  // output: Hello '' World

// length of the string can be found by using the length property
const name ='rafiqul islam';
name.length;

// we can use another notation, this allow us to use variable inside a string.
console.log(`my name is : ${name}`);
//------------------------------------------------------

//------------------------------------------------------
const myHobby= "watching movies, playing, studying, reading etc";

//  character at the specified index.
myHobby.charAt(2);

//  Unicode value of the character at the specified index
myHobby.charCodeAt(2);

// combine two strings and returns a new combined or joined string
let firstName = 'habibur ';
let lastName = 'Rahman';
firstName.concat(lastName);

// whether a string ends with a specified string or characters, this method returns boolean
console.log(lastName.endsWith("man"));

// converts UNICODE values to characters, this is a static method of String class so we need to call it as such.
String.fromCharCode(87);

// This method checks whether the string variable contains specific string or not
firstName.includes('bi');

// index of first occurrence of given query string
firstName.indexOf('b');

// replacing: this method has search value and replace value as parameter. it accept regular expression as well.
firstName.replace('b','li');

// search for specified value or regular expression , if found it returns the index, if not found returns -1
firstName.search('bi');

// search for start with value, if found  return true otherwise false.
firstName.startsWith("hab");

// take a part of the string, first parameter is from where we want to slice, second is till which index.
console.log(firstName.slice(3, 5));

// remove either white spaces from the given string
firstName.trim();

// this method splits the string into bunch of array with the delimiter we provide
let random = "my-name-is-whatever";
random.split('-');

// uppercase and lower case
firstName.toUpperCase();
firstName.toLowerCase();
