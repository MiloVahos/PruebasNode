console.log('Inicio del programa');

setTimeout( function(){
    console.log('Primer Timeout');
},3000)


setTimeout( function(){
    console.log('Segundo Timeout');
},0)


setTimeout( function(){
    console.log('Tercer Timeout');
},0)

console.log("Fin del programass");

/*
SALIDA
Inicio del programa
Fin del programa
Segundo Timeout
Tercer Timeout
Primer Timeout
*/