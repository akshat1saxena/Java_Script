/*
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?

2. Increase the population of your country by 1 and log the result to the console

3. Finland has a population of 6 million. Does your country have more people than Finland?

4. The average population of a country is 33 million people. Does your country have less people than the average country?

5. Based on the variables you created, create a new variable 'description' which contains a string with this format:
    'Portugal is in Europe, and its 11 million people speak portuguese'
 */

let population = 130;
console.log(population / 2);

population += 1;
console.log(population);

console.log(population > 6);
console.log(33 > population);
let description = ("India is in Asia, and its" + " " + population / 1.2 + " million people speak Hindi");
console.log(description);