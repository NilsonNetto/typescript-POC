export type GameEntity = {
  id: number,
  title: string,
  plataform: string,
  purchased: boolean,
  played: boolean,
  gameplayTime: number,
  price: number
}

export type NewGame = Omit<GameEntity, "id" | "played">

export type GameUpdate = Omit<GameEntity, "id">