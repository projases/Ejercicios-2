// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

const videogames = [
  { name: "Final Fantasy VII", genre: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genre: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genre: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genre: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genre: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genre: ["RPG"], score: 10 },
];
const rpg = videogames.filter((game) => game.genre.includes("RPG"));
const rpgAvg =
  rpg.reduce((accumulator, game) => {
    return accumulator + game.score;
  }, 0) / rpg.length;
console.log(rpg, rpgAvg);
