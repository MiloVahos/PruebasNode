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
}]

let getEmpleado = (id,callback) => {
    let empleadoDB = empleados.find( empleado => {
        return empleado.id === id;
    })
    
    if( !empleadoDB ) {
        callback(`No existe un empleado con el ID: ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salario.find( salario => {
        return salario.id === empleado.id;
    });
    if( !salarioDB ) {
        callback(`No se encontro salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleado(2, (err, empleado) => {

    if ( err ) {
        return console.log( err );
    }
    
    getSalario( empleado, (err, resp) => {
        if ( err ) {
            return console.log( err );
        };
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`)
        
    })
});