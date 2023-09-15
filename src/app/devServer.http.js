// Este arquivo inicializa servidor para facilitar na fase de desenvolvimento
// Tente usar npm run dev ou yarn dev

import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    // Lê o arquivo HTML
    fs.readFile('src/app/index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro interno do servidor');
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Aplicação está rodando em http://localhost:${port}/`);
});
