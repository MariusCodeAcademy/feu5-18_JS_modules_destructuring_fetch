## modules uzd

1. Sukurkite modulį, kuris skaičiuoja stačiakampio plotą pagal jo plotį ir aukštį. Modulyje turėtų būti funkcija, kuri priima du argumentus (plotį ir aukštį) ir grąžina stačiakampio plotą. Numatytasis exportas

2. Sukurti moduliuose temperature.js

   1. aprasyti ir exportuoti funkcija 'contertTemp()'
   2. funkcija priima argumentu objekta {temp: 18, unit: 'C'} ir grazina temperatura farenheitais
   3. jei gauna argumentu {temp: 100, unit: 'F'} grazina celsijum
   4. pries grazinima iskonsolinti kokia temp ir vienetus gavo ir i ka paverte.
      5.panaudoti userDestuct.js faile isitikinti kad veikia.
      contertTemp({temp: 18, unit: 'C'}) -> grazins farenheitus
      contertTemp({temp: 18, unit: 'F'}) -> grazins Celsiju

3. Parasyti funkcija kuri atrenka tik realius zmones is users masyvo ir grazina. grazinta masyva atspausdinti su listNameAgeEmail() funkcija

4. parasyti funkcija kuri ima users arr tipo masyva kaip argumenta. ir prideda kiekvienam objektui didejanti id. Id yra string tipo pvz 'id_001', 'id_002'

5. parasyti funkcija kurti gauna argumentu masyva(users) ir email reikme.
   'deleteUser(user, 'bob@builder.com')'
   grazinti isviltruota masyvo versija. isitikinti kad veikia. import export

6. parasyti funkcija render(arr). funkcija gauna masyva kaip argumenta(pvz users), ir sugeneruoja li elementu sarasa HTMLe. index.html susikurti ul elementa su id ir i ji sugeneruoti li elementus su visa informacija is objekto

## papildomi uzd

### sukurti atskirame js faile funkcijas, jas importuoti kad atlikti:

1. Naudoti masyvo metodą, kad sukurtumėte naują objektų masyvą, kuriame būtų kiekvieno vartotojo vardas ir el. Pašto adresas.
2. Naudoti masyvo metodą, .filter() metodą, kad sukurtumėte naują objektų masyvą, kuriame būtų tik vartotojai, vyresni nei 30 metų.
3. Naudoti masyvo metodą, kad apskaičiuotumėte visų masyvo vartotojų amžių sumą.
4. Naudoti masyvo metodą, kad rastumėte vartotoją su el. Pašto adresu „harry@hogwarts.com“.
5. Naudoti masyvo metodą, kad į konsolę būtų išvestas kiekvieno vartotojo vardas ir amžius.
