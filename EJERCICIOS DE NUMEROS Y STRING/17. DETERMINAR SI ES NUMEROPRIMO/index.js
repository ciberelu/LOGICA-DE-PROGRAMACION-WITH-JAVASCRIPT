let numero = 2

function isPrimo(num){
    if (num < 2) return console.log("Los numeros primos solo pueden ser mayores que 1");

    let i = 2
    let isPrimo = true
    while (i < num){
        //divide el numero desde 2 incrementando en 1 hasta si mismo
        if (num % i == 0){ //cuando encuentre un numero diferente a el que divida exacto

            isPrimo = false //cambia el vlor de isPrimo a false para indicar que encontro un numero que divide exacto al numero dado
            break //detiene la iteracion para que ya no siga dividiendo, porque no tiene sentido que siga diviendo los demas numeros que faltan 
                    //por recorrer si ya encontro un numero que divide exacto al numero
            
        }
        
        i++    
    }

    return isPrimo ? console.log("El numero  ", num, " si es primo") : console.log("El numero  ", num, " no  es primo");


}

isPrimo(numero)