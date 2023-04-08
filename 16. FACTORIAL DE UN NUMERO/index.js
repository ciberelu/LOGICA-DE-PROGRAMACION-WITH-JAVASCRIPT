let numero = 2

function calcularFactorial(num){

    let factorial = num
    let contador = num -1

    while (contador > 0){
        if (factorial == num){
            factorial = contador * num
            contador --
        }else{
            factorial = (contador * factorial)
            contador--
        }
        
    }

    console.log(factorial);
    
}

calcularFactorial(numero)