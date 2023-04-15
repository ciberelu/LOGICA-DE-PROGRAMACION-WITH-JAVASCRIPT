// variable para guarar el resultado de la operacion
let resultado;

//operadores basicos aritmeticos
let suma = "+";
let resta = "-";
let multiplicacion = "*";
let division = "/";

function operacionesMatematicas (a = 0, b = 0, operador = suma){

    if (operador !== "*" && operador != "/" && operador != "+" && operador != "-" ){
        
        console.log("no ingresaste el operador correcto");
    }

    if (operador == "*") {
        resultado = a * b
        console.log("El resultado es " + resultado);
    }else if (operador == "/"){
        resultado = a / b
        console.log("El resultado es " + resultado);
    }else if (operador == "+"){
        resultado = a + b
        console.log("El resultado es " + resultado);
    }else if (operador == "-"){
        resultado = a - b
        console.log("El resultado es " + resultado);
    }


}

operacionesMatematicas(4, 3, resta);