// create a local server 
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Curso de NodeJS');
});

// research arrow function
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});

