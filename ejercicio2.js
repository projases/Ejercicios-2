// 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  genre: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, genre, year } = game;
console.log(title, genre, year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};
const { var1, var2 } = { var1: animalFunction(), var2: animalFunction() };
console.log(var1);
console.log(var2);

// 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;
console.log(name, itv);

const [año1, año2, año3] = itv;
console.log(año1, año2, año3);
