/*
{
    name: 'Bob the Builder',
    age: 45,
    email: 'bob@builder.com',
    height: 175,
    isRealHuman: false,
  },
*/

// funkcija kuri grazina users useseriu vardus
export function getNamesArr(arr) {
  return arr.map((uObj) => uObj.name);
  // return arr.map(({ name }) => name);
}

export const createElement = (el, className = '', text = '', parent = '') => {
  const newEl = document.createElement(el);
  if (className) newEl.className = className;
  if (text) newEl.innerHTML = text;
  if (parent) parent.appendChild(newEl);
  return newEl;
};

export function listNameAgeEmail(arr, dest) {
  // arr.forEach((aObj)  destrukturizuoti aObj
  arr.forEach((aObj) => {
    const elText = `name: ${aObj.name}, age: ${aObj.age}, email: ${aObj.email}`;
    createElement('p', '', elText, dest);
  });
}
