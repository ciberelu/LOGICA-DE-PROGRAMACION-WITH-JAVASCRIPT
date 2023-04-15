let arrayDeNumeros = [1,2,3,4,5,6,7,8,9,0]

function obtenerParesE_Impares(lista){
    let pares = []
    let impares = []

    for (const num of lista) {
        if (num % 2 == 0){
            pares.push(num)
        }else {
            impares.push(num)
        }
    }
    console.log({
        pares,
        impares
    });

    
}

obtenerParesE_Impares(arrayDeNumeros)