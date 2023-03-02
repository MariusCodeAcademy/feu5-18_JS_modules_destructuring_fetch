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
