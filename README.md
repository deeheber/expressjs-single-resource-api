# express-mongo-rest-api

This is an http server that acts as a data store, backed by Mongo DB with communcation by Mongoose.

### Directions to run
1. run `npm install` from the command line
2. `npm start` will start the server
3. use an application like [Postman](https://www.getpostman.com/) to make calls to the API

### API Calls
- `GET`/api/notes returns all notes
- `GET`/api/notes/:id
- `POST`/api/notes
- `PUT`/api/notes/:id
- `DELETE`/api/notes/:id deletes the selected notes

`GET` will only return items if they exist in the database
`POST` and `PUT` requests must be valid JSON.

### Ways to contribute
- Report any bugs or feature requests by opening up a new GitHub issue
- Fork this repo > code away > submit a PR to the master branch when complete
