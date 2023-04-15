let oracion = "hola Bebe"

//solucion 1
const invertida = oracion.split("").reverse().join("")

console.log(invertida);

//solucion 2

const invertida2 = (cadena) => {
    let contador = cadena.length - 1
    let invertida = ""

    while(contador < cadena.length && contador >= 0) {
        invertida = invertida + cadena[contador]
        contador--
    }

    return invertida
}

console.log(invertida2(oracion));
