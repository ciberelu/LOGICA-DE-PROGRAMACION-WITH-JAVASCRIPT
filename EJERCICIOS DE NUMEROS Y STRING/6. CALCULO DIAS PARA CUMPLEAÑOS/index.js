//recibe la fecha del proximo cumpleaños
let cumpleaños = new Date("07 apr 2023")

// recibe la fecha actual
let hoy = new Date()

function calcularDiasRestantes(cumple, fechaHoy){
    //resta los milisegundos que faltan de hoy a la fecha de cumpleaños
    //se divide en mil para convertir a segundos
    //60 para convertir a minutos
    //60 para convertir a horas
    // 24 para obtener los dias
    let diasRestantes = Math.floor((cumple.getTime() - fechaHoy.getTime()) / (1000*60*60 * 24)) 
    let singularPlural = diasRestantes == 1 ? " dia" : " dias" 
    console.log(`Hola, para que cumplas años faltan ${diasRestantes} ${singularPlural}` );
}

calcularDiasRestantes(cumpleaños, hoy)

function calculoDias(){
    let milisegundos = 86400000
    let dias = milisegundos / (1000*60*60*24)
    console.log(dias);
}

// calculoDias()
