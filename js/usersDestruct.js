'use strict';
console.log('usersDestruct.js file was loaded');

import { users } from './db/users.js';
import { getNamesArr } from './modules/usersHelperFn.js';

console.table(users);

const namesArr = getNamesArr(users);
console.log('namesArr ===', namesArr);

console.log(Object.values(users[0]));
