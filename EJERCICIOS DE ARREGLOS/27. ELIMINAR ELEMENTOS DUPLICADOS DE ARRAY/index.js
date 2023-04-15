let arrayAOrdenar = ["x", 10, "x", 2, "10", 10, true, true]

function eliminarDuplicados (arr){
    let set = new Set(arr); //esta instancia me genera un objeto de tipo Set el cual no acepta valores repetidos
    let arraySinDuplicados = [...set] //aqui se crea un array vacio, y le paso una copia del objeto, esto se hace para convertir de Set a array iterable
    
    console.log("con el metodo set ", arraySinDuplicados);
    let duplicados = []

    let sinDuplicados = arr.filter((item, index, self) =>{
        if (!(self.indexOf(item) === index)){
            duplicados.push(item)
        }

        return self.indexOf(item) === index 
    })
    
    console.log("con el metodo filter e indexOf ",sinDuplicados, duplicados);
}

eliminarDuplicados(arrayAOrdenar)