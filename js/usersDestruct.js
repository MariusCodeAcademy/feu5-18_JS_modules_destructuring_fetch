'use strict';
console.log('usersDestruct.js file was loaded');

import { users } from './db/users.js';
import {
  getNamesArr,
  createElement,
  listNameAgeEmail,
  getRealHumans,
  getEmailAndHeigh,
} from './modules/usersHelperFn.js';
import { getNameAndEmail } from './modules/practiceHelper.js';

console.table(users);

// taikomes
const divApp = document.getElementById('app');

const namesArr = getNamesArr(users);
console.log('namesArr ===', namesArr);

listNameAgeEmail(users, divApp);
createElement('hr', '', '', divApp);
createElement('h2', '', 'Real human', divApp);

// 3. Parasyti funkcija kuri atrenka tik realius zmones is users masyvo ir grazina. grazinta masyva atspausdinti su listNameAgeEmail() funkcija

const realArr = getRealHumans(users);
console.log('realArr ===', realArr);
listNameAgeEmail(realArr, divApp);

const emHeiArr = getEmailAndHeigh(users);
console.table(emHeiArr);

const namEmailArr = getNameAndEmail(users);
console.log('namEmailArr ===', namEmailArr);
