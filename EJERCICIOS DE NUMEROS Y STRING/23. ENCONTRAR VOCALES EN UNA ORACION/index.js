let oracion = "holA mundo"


function encontrarVocalesYConsonantes (oracion){
    let oracionArray = oracion.split(" ").join("").toLowerCase()
    console.log(oracionArray);
    
    let vocales = 0
    let consonantes = 0

    for (const letra of oracionArray) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"  )vocales++
            
        else consonantes++

    }
    console.log(`Hay ${vocales} vocales en la oracion y hay ${consonantes} consonantes en la oraccion`);
    console.log({
        oracion,
        vocales,
        consonantes
    });
}

encontrarVocalesYConsonantes(oracion)