# expressjs-single-resource-api

This is an http server that acts as a simple data store, backed by in-memory storage objects that can be found in `data.js`.

### Directions to run
1. run `npm install` from the command line
1. `npm start` will start the server
2. open your browser to `localhost:8000` or use an application like [Postman](https://www.getpostman.com/)
3. enter a possible call from below

### Possible calls with current data
`GET`/notes returns all notes
`GET`/notes/:idNumber returns the note that has that id if it exists
`POST`/notes adds a valid JSON object to notes
`PUT`/notes/:idNumber updates the selected note if valid JSON
`DELETE`/notes/:idNumber deletes the selected note

`GET`/books returns all books
`GET`/books/:idNumber returns the book that has that id if it exists
`POST`/books adds a valid JSON object to books
`PUT`/books/:idNumber updates the selected book if valid JSON
`DELETE`/books/:idNumber deletes the selected book

### Ways to contribute
- Report any bugs or feature requests by opening up a new GitHub issue
- Fork this repo > code away > submit a PR to the master branch when complete
