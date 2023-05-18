// Store birth year and future year
var birthYear = 1999;
var futureYear = 2026;

// Calculate possible ages
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
var nextAge = age + 1;

// Display the results
console.log("If you were born in " + birthYear + ", then in " + futureYear + " you'll be " + age + " or " + nextAge );
