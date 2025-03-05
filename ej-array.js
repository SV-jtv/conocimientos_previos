// exercicis array

// exercici 1
function sumarPares(array){
    let result = 0
    for (let x of array){
        if (x%2 == 0){result += x}
    }
    return result
}

console.log(sumarPares([2,4,5,6,7,8,3,1,10,4]))


// exercici 2


//console.log(ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara'])) //→ Clara,Rodriguez,8,9,5,4,6.5 


// exercici 3
function filterWords(array){
    let list = array
    list.sort();
    for (let i in array){
        if (array[i].charAt(0) == "Z"){array.pop()}
    }
    return list
}


console.log(filterWords(["Bob", "Alex", "Zoello"]));
console.log(filterWords(["León", "Zebra", "Gacela"]));
console.log(filterWords(["Mercedes", "Bmw", "Audi", "Porche"]));

// Métodos y Funciones del Array

// Map
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
let arrayNotasSubidas = arrayNotas.map(nota  => nota + nota * 0.10)

// Reduce
let arrayNotas2 = [5.2, 3.9, 6, 9.75, 7.5, 3]
// podríamos omitir el valor inicial 0 para total
let sumaNotas = arrayNotas.reduce((total,nota)  => total+nota/*,0*/)    // total = 35.35

//Pero también pudo querer obtener la nota más alta
let maxNota = arrayNotas.reduce((max,nota)  => nota > max ? nota : max)    // max = 9.75

// From
let arrayNotas3 = [5.2, 3.9, 6, 9.75, 7.5, 3]
let arrayNotasSubidas2 = Array.from(arrayNotas, nota  => nota + nota * 0.10)