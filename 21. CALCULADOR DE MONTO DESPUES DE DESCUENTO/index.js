let cantidad = 1000
let descuento = 20

function calcularMontoConDescuento(cantidad = undefined, descuento = 0){
    
    if (!cantidad) return console.log("ingresa una cantiad a evaluar")
    if (descuento < 1) return console.log("Los descuentos solo pueden ser mayores a 1%");
    if (typeof(descuento) !== "number") return console.log("No ingresaste ningun descuento")


    let cantidadConDescuento = cantidad -( cantidad * descuento / 100)
    console.log(`El cliente debe de pagar por ${cantidad} con un descuento de ${descuento}% la cantidad de ${cantidadConDescuento}`);

}

calcularMontoConDescuento(cantidad, descuento)
