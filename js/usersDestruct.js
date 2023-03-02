'use strict';
console.log('usersDestruct.js file was loaded');

import { users } from './db/users.js';
import { getNamesArr, createElement, listNameAgeEmail } from './modules/usersHelperFn.js';

console.table(users);

// taikomes
const divApp = document.getElementById('app');

const namesArr = getNamesArr(users);
console.log('namesArr ===', namesArr);

// createElement('h2', 'card', 'Testing', divApp);

listNameAgeEmail(users, divApp);
