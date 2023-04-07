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
        
        return (persona.edad >= 18 && persona.nombre == "Luis")



    })

    console.log(Filtered);


}


FilterPorNombreYEdad(personas)