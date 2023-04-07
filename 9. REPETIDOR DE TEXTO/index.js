let texto = "hola"

function repetirTexto(texto = "", cantidadVeces = 1){
    let contador = 1
    let textoRepetido = ""

    if (!texto) return 

    if (cantidadVeces < 0) return console.log("No puedes repetir negativamente");

    while (contador <= cantidadVeces){
        textoRepetido = textoRepetido + texto + " "
        contador++
    }

    console.log(textoRepetido);

}

repetirTexto(texto, -1)