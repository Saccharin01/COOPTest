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
    fs.readFile("./public/html/Script.js", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "application/script" });
      res.end(data);
    });
  } else if (req.url === "/favicon.ico") {
    fs.readFile("./public/html/favicon.ico", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "img/ico" });
      res.end(data);
    });
  } else if (req.url === "/unclePizza.jpg") {
    fs.readFile("./public/html/unclePizza.jpg", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "img/jpg" });
      res.end(data);
    });
  }
});
