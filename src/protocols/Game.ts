export type Game = {
  id?: number,
  title: string,
  plataform: string,
  purchased: boolean,
  played: boolean,
  gameplayTime: number,
  price?: number
}