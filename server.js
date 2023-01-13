const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

app.use("/api", require("./routes/notesApi"));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
