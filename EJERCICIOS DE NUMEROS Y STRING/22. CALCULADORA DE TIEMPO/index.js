let fecha = new Date("18 mar 1992") //fecha desde la que evaluo

function calcularAños(fecha){
    let tiempoAntaño = fecha.getTime() //obtengo los milisegundos de esa fecha
    let hoy = new Date().getTime() //fecha actual y obtengo los milisegundos de esa fecha

    let añosPasados = (hoy - tiempoAntaño )/1000 / 60 / 60 / 24 / 365 //resto los milisegundos de hoy menos los que habian pasado al 18 de marzo de 1992 esos milisegundos los convierto en años.

  
    console.log(`Desde la fecha ${fecha} hasta la fecha actual han pasado ${añosPasados} años`);
}

calcularAños(fecha)