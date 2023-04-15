let arrayNumeros = [1, 4 ,5]

function elevarAlCuadrado(arrayNumeros = undefined) {
    //verifico que me hayan pasado el array de Numeros
    if (arrayNumeros === undefined) return console.warn("No ingresaste la lista de numeros")

    //si me pasan valor de parametro, verifico que sea una lista es decir un array 
    if (!(arrayNumeros instanceof Array)) return console.log("lo que ingresaste no fue una lista");

    //verifica que la lista que pasaron no este vacio
    if (arrayNumeros.length === 0) return console.log("tu lista de numeros esta vacia");


    for (const num of arrayNumeros) {
        //verifica que cada elemento del array sea un numero
        if ( typeof num !== "number") return  console.log(`Este valor de la lista ${num} no es un numero`);

    }

    //mapea el array de numeros convirtiendo cada valor en su valor al cuadrado
    let arrayAlCuadrado = arrayNumeros.map(num => num * num)
    console.log(arrayAlCuadrado);
}

elevarAlCuadrado()
elevarAlCuadrado([1])
elevarAlCuadrado(["a"])
elevarAlCuadrado(arrayNumeros)




