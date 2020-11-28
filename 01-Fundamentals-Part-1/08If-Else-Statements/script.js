const age = 19;

if (age >= 18) {
    console.log(`Akshat can have driving License 🤩`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Akshat is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);