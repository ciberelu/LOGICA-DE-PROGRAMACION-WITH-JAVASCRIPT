let oracion = "hola mundo holi "
let textoAEvaluar = "mundo"

function textoEnCadena(cadena, texto){
    let i = 0
    let contador = 0
    //en la primera condicion entra porque i vale 1
    while(i !== -1){
        i = cadena.indexOf(texto, i) //le asigna el valor donde comienza el indice de la palabra que se busca, si no la encuentra le asigna -1

        if (i !== -1){ //si es diferente a menos 1 entra al if para contabilizar que encontro una vez
            i++ //aumenta un valor la i para que en la siguiente bucle empiece a buscar despues de donde encontro la primer palabra
            contador ++ //se aumenta cada vez que encuentra una palabra, representa las veces que la palabra aparece en el texto largo
        }
    }

    console.log(`La palabra ${texto} se repite ${contador} ${contador == 1 ? "vez" : "veces"}`);
}

textoEnCadena(oracion, textoAEvaluar)