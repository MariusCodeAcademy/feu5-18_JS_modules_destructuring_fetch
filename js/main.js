'use strict';
console.log('main.js file was loaded');

// importuojam named exporta
import { username, town } from './modules/namedExport.js';

console.log(`this users name is ${username} and he is from ${town}`);
