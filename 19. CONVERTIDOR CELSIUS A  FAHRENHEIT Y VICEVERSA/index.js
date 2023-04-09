let gradosFahrenheit = 0
let tipo = "celcus"

let gradosCelcius = 0


function convertirGrados(grados, tipo){
    if ((tipo !== "celcius") || (tipo !== "fahrenheit")) return console.log("Ingrese un tipo de temperatura valida") 
    
    
    if (tipo === "celcius"){
        gradosFahrenheit = (gradosCelcius * 9/ 5)+32
        console.log(`${gradosCelcius} grados celsius son ${gradosFahrenheit.toFixed(2)} Fahrenheit`)

    }else {
        gradosCelcius = (gradosFahrenheit - 32) * 5 /9
        console.log(`${gradosFahrenheit} grados Fahrenheit son ${gradosCelcius.toFixed(2)} Celsius`)

    }

}

convertirGrados(gradosFahrenheit, tipo)