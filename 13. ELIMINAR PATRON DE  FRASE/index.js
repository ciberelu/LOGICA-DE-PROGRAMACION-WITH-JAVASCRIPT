let sentence = "Xyz1, abc2, xyz3"
const patron = "xyz"


function deletePatron(sentence, patron){
    let i = 0
    sentence = sentence.toLowerCase() //convierte toda la frase a minuscula para que al evaluar no importe si la frase tiene mayusucla y el patron a eliminar no
    //como i es diferente a menos 1 es decir 0 entra en el bucle
    while (i != -1){

        i = sentence.indexOf(patron)// busca el indice de donde aparece por primera vez el patron,si no lo encuentra retorna -1 y no entra al if y el bucle termina

        //si encuentra el indice entonces i es diferente  a menos 1 y entra al if
        
        if (i != -1){
            i++ // se aumenta en 1 el valor de i para que en la segunda iteracion comience a buscar despues del indice anterior encontrado
            sentence = sentence.replace(patron, "") //ahora la oracion original se le asigna el valor de si misma pero con el elemento reemplazado por "" 

        }

    }
    
    console.log(sentence);

}

deletePatron(sentence, patron)