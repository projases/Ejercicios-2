// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, pos1, pos2) {
  let bounds = array.length - 1;
  if (pos1 > bounds || pos1 < 0 || pos2 > bounds || pos2 < 0) {
    return "Out of bounds";
  }
  const temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
  return array;
}

const modFanF = swap(fantasticFour, 3, 1);
console.log(modFanF);
