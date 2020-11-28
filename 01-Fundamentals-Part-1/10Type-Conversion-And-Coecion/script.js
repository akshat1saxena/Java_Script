const inputYear = `1991`;



console.log(Number(inputYear) + 18); //This will convert String to a integer.
console.log(inputYear + 18);

console.log(Number('Donas')); //This will give NAN(not a number),because that can not be converted to a number.

console.log(String(23)); //This will convert the number to astring.

// type coercion

console.log(`I am ` + 23 + ` years old.`);
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + '1'; //Will give string 11
n = n - 1; //Will subtract 1 from 11
console.log(n);