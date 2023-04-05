

let arrayNumeros = []
let i = 1

while (i <= 100){
    arrayNumeros.push(i)
    i++

}

function filtrarMultiplos3 (array){
    let i = 0
    if (Array.isArray(array)){
        while (i <array.length){
            if (array[i] % 3 == 0){
                console.log("este es un multiplo de 3 ", array[i]);
            }
            i++
        }
    }else {
        console.log("ingrese una lista de numeros");
    }

    let multiplos3conFilter = []

    arrayNumeros.filter((num) => {
        if (num % 3 == 0) {
            multiplos3conFilter.push(num)
            
    }})
    console.log("Hecho con filter: Estos son multiplos de 3", multiplos3conFilter);
    
}
filtrarMultiplos3(arrayNumeros)