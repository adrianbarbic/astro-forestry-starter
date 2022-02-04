const numbers = [-10, 20, -30, 40, 50];

const numbersTimesTen = numbers.map((value) => value * 10);

const positiveNumbers = numbers
  .filter((num) => num > 0)
  .map((value) => value * 100);

console.log("positiveNumbers: ", positiveNumbers);

console.log(numbersTimesTen);

const people = [
  { firstName: "Tika", lastName: "Sari", address: "Batam" },
  { firstName: "Adrian", lastName: "Barbic", address: "Hawthorn" },
];

console.log("people: ", people);

const updatedPeople = people.map((person) => ({
  ...person,
  fullName: `${person.firstName} ${person.lastName}`,
}));

console.log("updatedPeople: ", updatedPeople);

const numbersTotal = numbers.reduce((sum, value) => sum + value);
console.log("numbersTotal: ", numbersTotal);

console.log(numbers.join(", "));
