let deadpool = {
    nombre: 'wade',
    apellido: 'windston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    },
    getApellido() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
}

console.log(deadpool.getNombre());
/**
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;*/

// Usando la destructuración
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre)
