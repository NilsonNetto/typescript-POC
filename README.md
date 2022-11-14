# Games Wishlist

An simple application for list all games that you wanna play

## About this application

This is a simple wishlist for all games that you want to play, having the game in your account or not. You can add any games, from any plataform that you have.

## How to run

1. Clone this repository
2. Install all dependencies

```bash
 npm i
```

3. Create a database on PostgreSQL
4. In the root of the project, insert the dump file on the database that you have created

```bash
 psql DATABASE_NAME < dump.sql
```

5. Configure the `.env` file using the `.env.example`
6. Run the application in the root of project

```bash
 npm run dev
```

## Routes

- **GET**/games

List all games on your wishlist

- **POST**/games

Insert a new game in your wishlist (a game that you wish to play)

```json
body = {
  "title": "Game title",  //(string, Game title)
  "plataform": "Steam",   //(string, Plataform name)
  "purchased": false,     //(true or false)
  "gameplayTime": 40,     //(number, in hours)
  "price": 5000           //(number, R$*100 // 0 if purchased)
};
```

- **GET**/games/plataform/:plataform

List all games in plataform (insert plataform name on :plataform)

- **GET**/games/totalprice

Show the total price of games that you don't own yet on your wishlist

- **GET**/games/totalprice/plataform

List the total price of games that you don't own by its plataform

- **GET**/games/totaltime

Show the total time in hours from the games marked as not finished

- **PUT**/games/:id

Update all informations of a game by its id

```json
body = {
  "title": "Game title",  //(string, Game title)
  "plataform": "Steam",   //(string, Plataform name)
  "purchased": false,     //(true or false)
  "played": false,        //(true or false)
  "gameplayTime": 40,     //(number, in hours)
  "price": 5000           //(number, R$*100 // 0 if purchased)
};
```

- **PATCH**/games/:id/purchased

Update a game from your wishlist that was marked as not purchased to purchased

- **PATCH**/games/:id/played

Update a game from your wishlist that was marked as not played to played

- **DELETE**/games/:id

Delete a game from the wishlist by its id
