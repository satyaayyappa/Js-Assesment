//part1
const name = ['satya', 'venky', 'vamsi'];
const greeting = `Welcome ${name[0]}, ${name[1]}, ${name[2]}.`
console.log(greeting);


//part2
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }


  //part3
const people = [
    { name: 'satya', birthYear: 1999 },
    { name: 'venky', birthYear: 1999 },
    { name: 'vamsi', birthYear: 2001 },
  ];
  
  function generateGreeting(person) {
    const age = calculateAge(person.birthYear);
    return `Welcome ${person.name}, you are ${age}.`;
  }
  
  // Loop through the people array and generate the greeting for each person
  for (let i = 0; i < people.length; i++) {
    const greeting = generateGreeting(people[i]);
    console.log(greeting);
  }