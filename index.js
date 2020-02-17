const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening On: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("Hello My HomPage");
};

const handleProfile = (req, res) => {
  res.send("Hi my ProfilePage");
};

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
