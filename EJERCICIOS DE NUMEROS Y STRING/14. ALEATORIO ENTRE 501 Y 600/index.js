let max = 600
let min = 501


function randomNumber (max, min){

    let aleatorio = Math.floor((Math.random()*(max - min)) + min)
    console.log(aleatorio);
}

randomNumber(max,min)