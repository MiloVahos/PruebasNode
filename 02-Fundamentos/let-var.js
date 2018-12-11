// Let vs Var

var nombre = 'Wolverine';

if ( true ) {
    var nombre = 'Magneto';
}

console.log(nombre);

/**
 * Las variables declaradas con var se pueden volver a declarar las veces que sea y se toma el valor de la última
 * Las variables declaradas con let no se pueden volver a declarar y dependen del scope.
 */