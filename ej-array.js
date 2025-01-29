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