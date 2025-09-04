import http from 'node:http';

const server = http.createServer();

server.on('request', (request, res) => {
    switch (request.url){
        case '/':
            console.log('a');
            break;
        case '/about':
            console.log('b');
            break;
        case '/contact-me':
            console.log('c');
            break;
        default:
            console.log('d');
            console.log(request.url);
            break;
    } 
})

server.listen(8080);