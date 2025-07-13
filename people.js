const { Person } = require("./PersonModel");

const people = [];

people.push(new Person("Estpan", 1995, 180, 75, 90));
people.push(new Person("Ihsan", 2008, 174, 56, 80));
people.push(new Person("inogemink", 2006, 168, 50, 75));
people.push(new Person("riskigemink", 2000, 172, 65, 85));

module.exports = { people };