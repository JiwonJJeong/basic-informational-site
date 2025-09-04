import http from 'node:http';
import fs from 'fs';

const server = http.createServer();

server.on('request', (request, res) => {
    let filePath;
    let status = 200;
    switch (request.url){
        case '/':
            filePath='./index.html'
            break;
        case '/about':
            filePath='./about.html'
            break;
        case '/contact-me':
            filePath='./contact-me.html'
            break;
        default:
            filePath='./404.html'
            status = 404;
            break;
    } 
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err){
            console.error('There was an error reading file:', err);
            return;
        }
        res.writeHead(status, {
            'Content-Type': 'text/html',
        })
        .end(data);
    });
})

server.listen(8080);