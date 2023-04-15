let random = Math.floor(Math.random()*(1000 -1)+1)

function operacionesMatematicas (num){
    console.log(`Esta es la mitad de ${num}: ${num /2} `);

    console.log(`Este es el doble de ${num}: ${num * 2} `);

    console.log(`Esta es la raiz cuadrada de ${num}: ${Math.sqrt(num)} `);

}

operacionesMatematicas(random)