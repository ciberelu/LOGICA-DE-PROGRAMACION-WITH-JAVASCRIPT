let listaNumeros = [9,8,7,6,5,4,3,2,1, 0]

function getAverage (lista){

    let i = 0
    let suma = 0
    //con el bucle while recorro todo el array, y por cada item del array acumulo su valor en la variable suma
    //cuando termina de recorrer el array la variable suma queda con el valor acumulado 
    while (i < lista.length){
        suma += lista[i]
        i++ 
    }

    //el programa continua por aca y saca el promedio, diviendo sumas dentro del total de elementos del array, para saber cuantos elementos tiene el array se pone el nombre del array y su propiedad length = longitud
    let promedio = 0
    promedio = suma / lista.length
    console.log(promedio);


}

getAverage(listaNumeros)
console.log("******************************************");

// ***********************METODO UTILIZANDO PROGRAMACION DECLARATIVA**************************************
// Es decir usando funciones en la que solo le digo que quiero hacer y el programa lo hace.

function getAverageWithReduceMethod(lista){
    let suma = lista.reduce((total, item, index, arr)=>{
        
         total += item
        console.log(total, item, index);
         
         
         
        
    })

    console.log("soy suma ",suma);
}

getAverageWithReduceMethod(listaNumeros)