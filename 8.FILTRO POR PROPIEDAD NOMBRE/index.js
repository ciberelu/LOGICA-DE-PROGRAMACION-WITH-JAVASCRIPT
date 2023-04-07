let personas = [
    {
        nombre: "Luis",
        edad: 17,
        genero: "Masculino"

    },
    {
        nombre: "Luis",
        edad: 30,
        genero: "Masculino"

    },
    {
        nombre: "Luis",
        edad: 30,
        genero: "Masculino"

    },
    {
        nombre: "Carla",
        edad: 30,
        genero: "Femenino"

    },
    {
        nombre: "Maria",
        edad: 30,
        genero: "Femenino"

    }
]

function FilterPorNombreYEdad(lista){
    const Filtered = lista.filter((persona) => {
        //por cada persona en la lista revisa la propiedad edad y la verifica si cumple la condicion de ser mayor o igual a 18
        // si se cumple revisa la propiedad nombre y lo compara con "Luis" si se cumplen ambas condiciones retorna el objeto o persona
        //que cumple con esas validaciones
        return (persona.edad >= 18 && persona.nombre == "Luis")
    })

    console.log(Filtered);


}


FilterPorNombreYEdad(personas)