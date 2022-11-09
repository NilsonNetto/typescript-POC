import { Game } from "../protocols/Game.js";

const games: Game[] = [{
  id: 1,
  title: 'Elden ring',
  plataform: 'Steam',
  purchased: true,
  played: false,
  gameplayTime: 102,
  }, {
  id: 2,
  title: 'Mass Effect',
  plataform: 'Origin',
  purchased: true,
  played: false,
  gameplayTime: 28,
  }, {
  id:3,
  title: 'Sekiro',
  plataform: 'Steam',
  purchased: false,
  played: false,
  gameplayTime: 44,
  price: 19990,
  }, {
  id:4,
  title: 'Horizon Zero Dawn',
  plataform: 'Steam',
  purchased: false,
  played: false,
  gameplayTime: 54,
  price: 19990,
  }]

  export { games }