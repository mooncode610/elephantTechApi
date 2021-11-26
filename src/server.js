const http = require("http");
const app = require("./index");
// const port = process.env.PORT || 3000;
const port = process.env.PORT || 443;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("server is online on port number" + port);
  });