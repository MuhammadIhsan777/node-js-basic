const { Person ,  createPerson} = require('./PersonModel');
const {people} = require('./people');

people.push(new Person('anianigemink', 2077, 174, 56, 80));

console.log(people[0].name);
for(let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.name === 'Ihsan') {
        continue;
    }
    if (person.name === 'anianigemink') {
        break;
    }
    console.log(`Name: ${person.name} is present.`);
}

people.push(createPerson({
    name: 'Siti',
    birthYear: 2000,
    height: 160,
    weight: 50,
    energy: 80
}))