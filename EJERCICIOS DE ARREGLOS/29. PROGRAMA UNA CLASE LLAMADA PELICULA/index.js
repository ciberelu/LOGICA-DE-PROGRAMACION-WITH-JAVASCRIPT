class Pelicula {
    constructor({
        id,
        titulo,
        director,
        estreno,
        paises,
        generos,
        calificacion
    }){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.paises = paises;
        this.generos = generos;
        this.calificacion = calificacion;

        //metodos especificos que se ejecutan cuando se instancia la clase
        //especific method that are ejecut when the class is instantiated
        this.validarIMDB(id)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarEstreno(estreno)
        this.validarPaises(paises)
        this.validarGeneros(generos)
    }

    //metodos generales
    validarIsString(propiedad, valor){

        if (valor == undefined) return console.log(`${propiedad} "${valor}" no esta definida`);

        if (typeof(valor) !== "string") return console.warn(`${propiedad} no es una cadena de texto`);

        return true
        
    }

    validarLengthPropiedad(propiedad, valor, longitud){
        if (this.validarIsString("titulo", valor)){

            if (valor.length > longitud){
                return console.error(`El titulo de la pelicula que ingresaste tiene más de ${longitud} caracteres`);
            }

        }
    }

    validarIsNumber(propiedad, valor){
        if (valor == undefined) return console.warn(`${propiedad} ${valor} no esta definido, por favor, ingresa un valor`);

        if (typeof(valor) !== 'number') return console.warn(`${propiedad} tiene que ser un número`);

        return true;
    }

    validarIsArray(propiedad, valor){
        if (!valor) return console.warn(`Ingresa un valor en ${propiedad}`);

        if (!(valor instanceof Array)){
            return console.warn(`${propiedad} tiene que ser ingresado en formato de arreglo`);
        }

        if (valor.length == 0) return console.warn(`${propiedad} esta en formato de arreglo pero no tiene valores`)

        for (const item of valor) {
            if (typeof item != 'string'){
                return console.warn(`"${item}" no esta en formato string, asegurate de ingresar cada elemento en formato string`);
            }
        }

        return true
    }

    //metodo estatico para obtener la lista de generos aceptados, estatico porque puedo acceder a el inclusive si no esta instanciada la clase

    static get listaGeneros(){
        return [ "action", "adult", "adventure", "animation", "biography",  "crime", "documentary", "drama", "family", "fantasy", "film noir"]
    }

    static generosAceptados(){
        return console.info("Los generos aceptados son: ", Pelicula.listaGeneros.join(", "))
    }
    //metodos especificos para evaluar cada propiedad
    validarIMDB(id){
        if (this.validarIsString("IMDB ID", id)){

            if (!(/^([a-z]{2})([0-9]{7})$/.test(id))){
                return console.error(`${id} id que ingresaste no es valido los id deben ser de 9 caracteres y contener dos letras al comienzo y 7 numeros despues.`);
            }
        }
    }

    validarTitulo(titulo){
        if (this.validarIsString("Titulo", titulo)){
            this.validarLengthPropiedad("Titulo", titulo, 100)
        }
    }

    validarDirector(director){
        if (this.validarIsString("Director", director)){
            this.validarLengthPropiedad("Director", director, 50)
        }
    }

    validarEstreno(estreno){
        if (this.validarIsNumber("Fecha de estreno", estreno)){
            if (!(/^([0-9]{4})$/.test(estreno))){
                return console.warn(`Fecha de estreno tiene que ser de 4 valores`);
            }
        }
    }

    validarPaises(paises){
        this.validarIsArray("Paises", paises)
    }

    validarGeneros(generos){
       if(this.validarIsArray("Generos", generos)){
        for (const genero of generos) {
            if (!(Pelicula.listaGeneros.includes(genero))){
                console.error(`Este genero ${genero} no es aceptado`);
                Pelicula.generosAceptados()
            }
        }
       } 
    }

    validarCalificacion(calificacion){
        if (this.validarIsNumber("Calificacion", calificacion)){
            if (calificacion < 0 || calificacion > 10){
                console.warn("La calificacion tiene que ser un rango entre 0 y 10");
            }else {
                this.calificacion = calificacion.toFixed(2); //para convertir el valor a 2 decimales
            }
        }
    }

    

    

    
}

// const primerPelicula = new Pelicula({id: "tt12020392",titulo: "avengers", director:"el director", estreno: "estreno", paises: "paises", generos: "genero", calificacion: 10})

//Probando el método estatico

// Pelicula.generosAceptados()

const secondPelicula = new Pelicula({id: "el1234567", titulo: "la primer pelicula", director: "el director", estreno: 2020, paises: ["Guatemala","Alaska"], generos: ["guate", "adventure", "mexico"] })
