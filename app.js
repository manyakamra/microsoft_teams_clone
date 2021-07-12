const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const stream = require("./src/stream");
const path = require("path");
const favicon = require("serve-favicon");

// app.use(favicon(path.join(__dirname, "favicon.ico")));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("start succ");
});

io.of("/stream").on("connection", stream);

server.listen(process.env.PORT || 8000);
