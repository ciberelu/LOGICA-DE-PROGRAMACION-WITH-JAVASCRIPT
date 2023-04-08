let palabra = "Dabale arroz a la zorra el abad"

let palabraAUsar = palabra.split(" ").join("").toLocaleLowerCase()


function isPalindromo (texto = ""){
    if (!texto) return console.log("Ingresa una palabra a evaluar"); 
    // ya no sigue ejecutando el codigo de la funcion si detecta que la palabra no se paso
    //al llamar a la funcion, esto se logra al mandar la palabra return de linea 7
    let contador = texto.length - 1
    let palindromo = ""
    while (contador >= 0){
        palindromo = palindromo + texto[contador]
        contador--
    }

    console.log((texto == palindromo) ? true : false);

}

isPalindromo(palabraAUsar)