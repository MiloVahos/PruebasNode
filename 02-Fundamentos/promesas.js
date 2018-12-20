// Permiten ejecutar un trabajo y después de que se resuelva la tarea realizar otra labor
let empleados = [{
    id: 1,
    nombre: 'Camilo'
},{
    id: 2,
    nombre: 'Juan'
},{
    id: 3,
    nombre: 'Vahos'
}]

let salario = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( empleado =>  empleado.id === id );
    
        if( !empleadoDB ) {
            reject(`No existe un empleado con el ID: ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });

}

let getSalario = (empleado) => {
    return new Promise ( (resolve, reject) => {
        let salarioDB = salario.find( salario => {
            return salario.id === empleado.id;
        });
        if( !salarioDB ) {
            reject(`No se encontro salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

/*getEmpleado(3).then( empleado => {
    console.log('Empleado de DB', empleado);

    getSalario(empleado).then( resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
    }, err => {
        console.log(err);
    })

}, (err) => {
    console.log(err);
})*/

// Promesas en cadena
getEmpleado(2).then( empleado => {

    return getSalario(empleado); // Cuando se usa un return, el siguiente then corresponde a esa promesa

}).then( resp => {
    console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
}).catch( err => {
    console.log(err);
});