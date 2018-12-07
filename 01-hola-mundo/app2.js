function saludar ( nombre ) {
    let mensaje = `hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Fernando');

console.log(saludo);