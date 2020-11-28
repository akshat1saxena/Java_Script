/* Number:Floating point numbers. Used for decimals and integers
String:Sequence of characters. Used for text
Boolean:Logical type that can only be true or false. Used for taking decissions
Undefined:Value taken by a variable that is not yet defined('empty value').
Null:Also means 'empty value'
BigInt(ES2020):Larger integer than the Number type can hold
Symbol(ES2015):Value that is unique and cannot be changed */

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);