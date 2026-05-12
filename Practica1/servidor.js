console.log("Hola Mundo JS desde ek servidor")

/* Promedio 2 variables */

let edad1= 11
let edad2= 33
console.log("Edad Promedio")
console.log((edad1+edad2)/2)

/* Medir tiempo de procesos */
console.time("miProceso")

    for(let i=0; i< 1000000000; i++){

    }

console.timeEnd("miProceso")

/*Objetos tipo tabla */

let usuarios=[
    {nombre: "Santiago", edad:"38"},
    {nombre: "Santiago", edad:"38"},
]

console.log(usuarios)