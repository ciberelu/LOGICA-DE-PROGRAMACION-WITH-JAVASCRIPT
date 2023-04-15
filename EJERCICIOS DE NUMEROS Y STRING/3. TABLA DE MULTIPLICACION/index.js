
//guarda el valor del numero a multiplicar
let a = 2

//guarda el valor de hasta que numero queremos multiplicar
let x = 10
let i = 0

function multiplicar(a = 0, x = 12){

    while (x >= i){
        let result = a * i
        if (i !== 5) {
            console.log(`${a} X ${i} = ${result}`);
        }
        
        i++
    }
}

multiplicar(a, x)