const http = require('http');
const host = 'localhost'
const port = 3000

const arrayTareas = ['lavar', 'estudiar', 'sacar al perro', 'ir a la iglesia', 'dormir'];


 const server = http.createServer((req, res) => {

    res.writeHead(200, {'content-type' : 'application/json'});
    res.end(JSON.stringify(arrayTareas));
 });

 server.listen(port, host, () => {
    console.log(`Servidor funcionando en ${host}:${port}`)
 });