const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  log(req.url, req.method, req.headers);
});

server.listen(3000);
