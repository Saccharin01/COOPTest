const http = require("http");
console.log(http);
const fs = require("fs");
console.log(fs);

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("./public/html/index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/style.css") {
    fs.readFile("./public/html/style.css", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  } else if (req.url === "/Script.js") {
    fs.readFile("./public/Script.js", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "application/Javascript" });
      res.end(data);
    });
  } else if (req.url === "/favicon.ico") {
    fs.readFile("./public/html/favicon.ico", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "image/ico" });
      res.end(data);
    });
  } else if (req.url === "/unclePizza.jpg") {
    fs.readFile("./public/html/unclePizza.jpg", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.end(data);
    });
    // 추가 한 부분
  } else if (req.url === "/index2.html") {
    fs.readFile("./public/html/index2.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/style2.css") {
    fs.readFile("./public/html/style2.css", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  } else if (req.url === "/Script2.js") {
    fs.readFile("./public/Script2.js", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "application/Javascript" });
      res.end(data);
    });
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log("서버 가동");
  console.log(`http://localhost:${PORT}`);
});
