let a = 0
let b = 12
let pares = []

function encontrarPares (num1, num2){

    while (num1 <= num2){

        if (num1 % 2 == 0){
            pares.push(num1)
        }
        num1 += 1
    }



}

encontrarPares()
console.log(pares);