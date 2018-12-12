// Es una función que se ejecuta después de que algo sucede
setTimeout( function() {
    console.log('Hola Mundo');
}, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }

    if ( id === 20 ) {
        callback(`El usuario con id ${ id }, no existe en la base de datos`);
    } else {
        callback(usuario);
    }
 
}

getUsuarioById(20, (usuario)=>{
    console.log('Usuario de base de datos',usuario);
});