const http = require("http");
http.createServer((_, res) => res.end("Bot is ready")).listen(8080)