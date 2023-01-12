const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const router = express.Router();
const { readAndAppend } = require("../helpers/fsUtils");

router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  const dbPath = path.join(__dirname, "../db/db.json");
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, dbPath);

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting Note");
  }
});

router.get("/notes", (req, res) => {
  const dbPath = path.join(__dirname, "../db/db.json");
  const data = fs.readFileSync(dbPath);
  const response = data.toString("utf-8");
  res.status(200).json(response);
});

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const dbPath = path.join(__dirname, "../db/db.json");
  const data = fs.readFileSync(dbPath);
  const response = data.toString("utf-8");
  const newArray = JSON.parse(response);
  const updatedArray = newArray.filter((item) => {
    if (item.id === id) {
      return false;
    } else return true;
  });
  const updatedStr = JSON.stringify(updatedArray);
  fs.writeFile(dbPath, updatedStr, (err, data) => {
    console.log("Done");
  });
  res.json(updatedArray);
});

module.exports = router;
