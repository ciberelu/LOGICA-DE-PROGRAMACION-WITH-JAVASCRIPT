let numeroDecimal = 4

let numeroBinario = 100

function convertidorDeBases(valorAConvertir, base) {

    let convertido;
    if (base == 2){
        convertido = parseInt(valorAConvertir,base)//el metodo parseInt recibe como argumento primero un string y de ese string lo convierte a base 10, si el string que recibe no es en base 10 se le pasa como segundo argumento la base en que viene el string para que realice la conversion correctamente a la base 10

        console.log(`El Numero ${valorAConvertir} en base ${base} es = a ${convertido} en base 10`)

    }else if (base == 10){

        convertido = valorAConvertir.toString(2) //la funcion toString(2) convierte un numero a cadena, la cadena tiene el formato de la base que le pasemos por parametro. En este ejemplo pasamos de base 10 a base 2
        // input = 4
        //output = 100 no es cien es uno cero cero. En base 2 o binaria

        console.log(`El Numero ${valorAConvertir} en base ${base} es = a ${convertido} en base 2`)

    }else{
        console.log("Por favor, ingresa una base valida a convertir");
    }



}


convertidorDeBases(numeroDecimal,10) //le paso un valor en base 10 y obtengo un valor en base binaria
convertidorDeBases(numeroBinario,8) // le paso una valor en binario y lo convierto a una base no valida, retorna base no valida
convertidorDeBases(numeroBinario,2) // le paso una valor en binario y lo convierto a base 2, retorna base no valida



