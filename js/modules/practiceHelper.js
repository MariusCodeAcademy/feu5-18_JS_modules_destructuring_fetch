// 1. Naudoti masyvo metodą, kad sukurtumėte naują objektų masyvą, kuriame būtų kiekvieno vartotojo vardas ir el. Pašto adresas.

export function getNameAndEmail(arr) {
  return arr.map(({ name, email }) => {
    const newObjectWithNameAndEmail = {
      name,
      email,
    };
    return newObjectWithNameAndEmail;
  });
}
