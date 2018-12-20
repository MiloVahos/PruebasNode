// let getNombre = async() => {
//     throw new Error('no existe');
//     return 'Camilo';
// }

let getNombre = () => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve('Fernando');
        }, 3000);

    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`
}

// Los async pueden estar solos, pero los await deben estar dentro de una función con async
saludo().then(mensaje => {
    console.log(mensaje);
});