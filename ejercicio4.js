// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const usersNames = users.map((item) => item.name);
console.log(usersNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
// const userAnacleto = users2.map((item) => ({ ...item, name: item.name.charAt(0) === "A" ? "Anacleto" : item.name, }));
const userAnacleto = users2.map((item) => {
  item.name = item.name.charAt(0) === "A" ? "Anacleto" : item.name;
  return item;
});
console.log(userAnacleto);
// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const visitedCities = cities.map((item) => {
  item.name = item.isVisited ? item.name + " (Visitado)" : item.name;
  return item;
});
console.log(visitedCities);
