
# Noteablez: An Express JS Note Taking App

Noteablez is a note taker that allows a user to write, save, and delete notes by utilizing Express JS backend to save and retrieve note data.



## Features

- Allow a user to write and save notes.
- Allow a user to delete previously saved notes.

## Technology and Methodology

The application uses an Express JS backend to save and retrieve note data from a JSON file. 

### HTML Routes

* GET `/notes` - returns the `notes.html` file

* GET `/` - also returns the `index.html` file

### JSON Database

The application utilizies `db.json` file on the backend used to store and retrieve notes via `res.sendFile` Express JS methodology.

* The application uses an FS Module to store and retrieve notes.

### API Routines

The application uses the following API routes:

* GET `/api/notes`: Reads the `db.json` file and returns all saved notes as JSON

* POST `/api/notes`: Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client

* DELETE `/api/notes/:id`: Receives a query parameter containing the id of a note to delete.

## Application in Action

![NoteTaker](https://user-images.githubusercontent.com/114820394/212182195-ece6d846-bf4a-4852-a428-8b468c94720e.gif)



## 🔗 Live Site Link
[![Live Site](https://img.shields.io/badge/livesite-click-orange)](https://notablez.herokuapp.com/notes)

## Tech Stack


- JavaScript
- Tailwindcss
- Node.js 
    - NPM (Inquirer)
    - NPM (Express)
    - NPM (UUID)
- ES6+ Syntax




**Server:** Visual Studio Code


## Authors

- [@liquidmonks](https://www.github.com/liquidmonks)


![Logo](https://i.imgur.com/MrXyBQy.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

