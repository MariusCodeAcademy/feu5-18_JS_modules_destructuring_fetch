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
  arr.forEach(({ name, age, email }) => {
    const elText = `name: ${name}, age: ${age}, email: ${email}`;
    createElement('p', '', elText, dest);
  });
}

export function getRealHumans(arr) {
  return arr.filter((uObj) => uObj.isRealHuman === true);
  // return arr.filter(({ isRealHuman }) => isRealHuman);
}

// grazinti tik email ir height
export function getEmailAndHeigh1(arr) {
  return arr.map((uObj) => {
    const emailAndHegh = {
      email: uObj.email,
      height: uObj.height,
    };
    return emailAndHegh;
  });
}
export function getEmailAndHeigh(arr) {
  return arr.map(({ email, height }) => {
    return {
      email,
      height,
    };
  });
}
