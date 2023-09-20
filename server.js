const http = require('http');
const host = 'localhost'
const port = 3000

const arrayTareas = [
    { id: '1', descripcion: 'lavar', estado: 'completado'},
    { id: '2', descripcion: 'estudiar', estado:'pendiente' },
    { id: '3', descripcion: 'sacar al perro',  estado: 'pendiente'},
    { id: '4', descripcion: 'ir a la iglesia',  estado: 'pendiente'},
    { id: '5', descripcion: 'dormir',  estado: 'pendiente'}
];


 const server = http.createServer((req, res) => {

    res.writeHead(200, {'content-type' : 'application/json'});
    res.end(JSON.stringify(arrayTareas));
 });

 server.listen(port, host, () => {
    console.log(`Servidor funcionando en ${host}:${port}`)
 });