let arrayDeNumeros = [1,4,99, -60]
let newArray = []

//solucin con la funcion de Math.max y Math.min
// function getValorMasAltoYMasBajo(lista){

//     newArray.push(Math.max(...arrayDeNumeros)) //obtiene el maximo valor de la lista y lo guarda dentro del nuevo array
//     newArray.push(Math.min(...arrayDeNumeros)) // obtiene el valor minimo de la lista y lo guarda dentro del nuevo array
//     console.log(newArray);


// }

function ordenarConSort(lista){
    lista.sort((a,b) => b -a) //ordena la lista de mayor a menor con la funcion .sort() la cual es un metodo de array
    //este metodo deja en la posicion 0 el valor mas alto y en la posicion final el valor mas bajo
    //para obtener los valores solo es necesario ingresar al indice cero y al indice final del array
    console.log(`El numero mayor de la lista es ${lista[0]} y el numero menor de la lista es ${lista[lista.length-1]}`);

}

// getValorMasAltoYMasBajo(arrayDeNumeros)
ordenarConSort(arrayDeNumeros)