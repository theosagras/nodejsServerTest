//import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<br>Helloworld thoes agras');
});

server.listen(3000, '127.0.1.1', () => {
    console.log('Server is running...');
})