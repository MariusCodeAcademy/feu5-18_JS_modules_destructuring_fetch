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

// 4. parasyti funkcija kuri ima users arr tipo masyva kaip argumenta. ir prideda kiekvienam objektui didejanti id. Id yra string tipo pvz 'id_001', 'id_002'

export function addIdsToArrObjects(arr) {
  const arrWithIds = arr.map((uObj, idx) => {
    const idVal = 'id_' + (idx + 1).toString().padStart(3, '0');
    uObj.id = idVal;
    return uObj;
  });

  return arrWithIds;
}
