let numero = 1001

function isCapicua (num = 0){
    //Evalua si lo que recibe como parametro es un numero si no lo es retorna una mensaje y no continua con el resto del codigo

    if (typeof(num) != "number") return console.log("Ingresa un numero");

    // si no recibe argumento retorna un mensaje y no continua con el resto del codigo
    if (!num) return console.log("Ingresa un numero por favor");

    let capicua = num.toString()
    capicua = capicua.split("").reverse().join("")
    
    if (capicua == numero ){
        console.log("si es un numero capicua");

    }else {
        console.log("No es capicua");
    }
}

isCapicua(numero)