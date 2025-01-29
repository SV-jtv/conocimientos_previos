// exercicis numbers

// 1
let num1 = prompt('Introduce el primer numero')
let num2 = prompt('Introduce el segundo numero')

function bigger() {
  if (num1>num2){
    return num1
  }else{
    return num2
  }
}
//let result = bigger(num1, num2)
console.log(bigger(num1, num2) + ' es más grande');

// 2
function multipli() {
    let resultado = 0
    for(i = 0; i < num2; i++){
        resultado += parseInt(num1)
    }
    return resultado
}
console.log(multipli(num1, num2) + ' es el resultado de la multiplicación')

// 3
let num3 = prompt('Introduce el tercer numero')
function multipliTres(num1, num2, num3) {
    let dos = multipli(num1, num2)
    let resultado = multipli(dos, num3)
    return resultado
}
let result= multipliTres(num1, num2, num3)
console.log(result)

// 4

// 5
let numPrim = prompt('Introduce un numero primo menor a 10.000');

if(numPrim < 10000){
    function alCubo() {
        
    } 
}else{
    numPrim = prompt('Introduce un numero primo menor a 10.000');
}



// 6