// import module http dari builtin module node.js
const http = require('http');
 
const server = http.createServer((req, res) => {
  console.log(req, "<<< request")
  console.log(res, "<<< response")
  
  // bikin rute untuk url "/" dengan method "GET"
  if (req.url === "/") {
    res.write("Ini adalah homepage")
    res.end()
  }

  // bikin rute untuk url "/me" dengan method "GET"
  if (req.url === "/me" && req.method === "GET") {
    res.end("<h1 style='color: red;'>Ini adalah halaman me</h1>")
  }

  if(req.url === "/nabi" && req.method === "GET") {
    res.end("Nabi")
  }
});
 
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})