const http=require('http');

const servidor=http.createServer((pedido,respuesta)=>{
    respuesta.end("Hola Mundo");
});

servidor.listen(8888);

console.log('Servidor web iniciado');