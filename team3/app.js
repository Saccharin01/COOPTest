const http = require("http");
console.log(http);
const fs = require("fs");
console.log(fs);
const sqlite3 = require('sqlite3').verbose();

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
  } else if (req.url === "/background.jpg") {
    fs.readFile("./public/html/background.jpg", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.end(data);
    });
  }else if (req.url === "/welcomePage.html") {
    fs.readFile("./public/html/welcomePage.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/welcomePage.css") {
    fs.readFile("./public/html/welcomePage.css", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  } else if (req.url === "/script2.js") {
    fs.readFile("./public/script2.js", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "application/Javascript" });
      res.end(data);
    });
  }else if (req.method === 'POST') {
    if (req.url === '/form-action') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const formData = new URLSearchParams(body);
        const userId = formData.get('userId');
        const userPassword = formData.get('userPassword');

        const db = new sqlite3.Database('./Database/database.db');
        
        db.serialize(() => {
          db.run("CREATE TABLE IF NOT EXISTS userInfo (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT UNIQUE NOT NULL, userPassword TEXT NOT NULL)");
          
          db.get("SELECT userId FROM userInfo WHERE userId = ?", [userId], (err, row) => {
            if (err) {
              console.error(err);
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Internal Server Error");
            } else if (row) {
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: false, message: "User already exists" }));
            } else {
              db.run("INSERT INTO userInfo (userId, userPassword) VALUES (?, ?)", [userId, userPassword], (err) => {
                if (err) {
                  console.error(err);
                  res.writeHead(500, { "Content-Type": "text/plain" });
                  res.end("Internal Server Error");
                } else {
                  fs.readFile("./public/html/welcomePage.html", "utf-8", (err, data) => {
                    if (err) {
                      res.writeHead(500, { "Content-Type": "text/plain" });
                      res.end("Internal Server Error");
                    } else {
                      res.writeHead(200, { "Content-Type": "text/html" });
                      res.end(data);
                    }
                  });
                }
              });
            }
          });
        });

        db.close();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    // 추가 한 부분
  } 
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log("서버 가동");
  console.log(`http://localhost:${PORT}`);
});
