'use strict';
console.log('destruct.js file was loaded');

function createUser() {
  return {
    name: 'james',
    town: 'London',
    age: 45,
  };
}

const u1 = createUser();
console.log('u1 ===', u1);

// be desturct
// const town = u1.town;
// const name = u1.name;
// const age = u1.age;

// su destruct
// const { town, name, age } = u1;
// console.log('town ===', town, name, age);

// Masyvo destruct

const arr1 = ['Bob the Builder', 45, 'bob@builder.com', 175, false];

// const username = arr1[0];
// const age = arr1[1];
// const isReal = arr1[4];
// su destruct
const [username, age, , , isReal] = arr1;

console.log({ username, age, isReal });
