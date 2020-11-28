// 5 Falsy values are follows:0, '', undefined, null, NaN

//Below examples are just to show 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Akshat'));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all ;`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`YAY! Height is defined`)
} else {
    console.log(`Height is undefined`);
}