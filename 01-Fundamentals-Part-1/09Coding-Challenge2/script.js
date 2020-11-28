// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:

// 1. Print a nice output to the console, saying who has the higher BMI. 
// The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// 2. Use a template literal to include the BMI values in the outputs.
//  Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

const marksMass = 78;
const johnsMass = 92;

//Height in Meters
const marksHeight = 1.69;
const johnsHeight = 1.95;

//BMI of Mark
const marksBmi = (marksMass / (marksHeight * marksHeight));

//BMI of John
const johnBmi = (johnsMass / (johnsHeight * johnsHeight))

console.log("BMI of John " + johnBmi);
console.log("BMI of Mark " + marksBmi);
if (marksBmi > johnBmi) {
    console.log(`Mark's BMI ${marksBmi} is higher than John's ${johnBmi}.`);
} else {
    console.log(`John's BMI ${johnBmi} is higher than Mark's ${marksBmi}.`);
}