let arrayNumeros = [7,5,7,8,6]
let ordenados = {
    ascendente: [],
    descendente: []
}

function ordenarArray(arr){

    ordenados.ascendente = [...arr.sort((a,b) => a-b)]

    ordenados.descendente = [...arr.sort((a,b)=> b-a)]



}

ordenarArray(arrayNumeros)
console.log(ordenados);