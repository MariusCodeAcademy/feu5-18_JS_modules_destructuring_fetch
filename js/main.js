'use strict';
console.log('main.js file was loaded');

// importuojam named exporta
import { username, town as miestas } from './modules/namedExport.js';
import { nums } from './modules/numbers.js';
// import default export
import vidurkis from './modules/avgDefault.js';

console.log(`this users name is ${username} and he is from ${miestas}`);

// sukurti faila numbers.js
// jame deklaruoti skaiciu masyva
// exportuoti
// importuoti main.js faile
// atspausdinti main.js faile
console.log('nums ===', nums);
// atspausdinti main.js faile vidurki masyvo
//
vidurkis(nums);
