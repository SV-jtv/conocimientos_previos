function cifrasLetras(mensaje){
    /*LENGUAJE HUMANO
        1. Pasar mensaje a MAYUSCULAS
        2. Para cada letra del mensaje tratarla
            ***2.1 Comprobar si hay que modificar la letra por un número
        3. Retornar el nuevo mensaje
    */
     mensaje=mensaje.toUpperCase();
    let textoSecreto = "";
    for (let i = 0; i<mensaje.length ; i++){
        let letra = mensaje.charAt(i);
        //console.log(letra);
        switch(letra){
            case 'E': letra = "3"; break;
            case 'A': letra = "4"; break;
            case 'S': letra = "5"; break;
            case 'T': letra = "7"; break;
            case 'O': letra = "0"; break;
            case 'I': letra = "1"; break;
        }
        textoSecreto=textoSecreto+letra; //textoScreto+=letra
    }
    console.log(textoSecreto)
    return textoSecreto;
} 


function cifrasLetras2(mensaje){
    mensaje=mensaje.toUpperCase();
    let textoSecreto = "";
    let diccionario = {
        'E': 3,
        'A': 4,
        'T': 7,
        'I': 1,
        'O': 0,
        'S': 5
    }

    //console.log("A" + diccionario['A']);
    for (let i = 0; i<mensaje.length ; i++){
        let letra = mensaje.charAt(i);
        //if(diccionario[mensaje.charAt(i)] != undefined){
        if(mensaje.charAt(i) in diccionario){
            letra = diccionario[mensaje.charAt(i)];
        }
        //console.log(letra);
        textoSecreto=textoSecreto+letra; //textoScreto+=letra
    }
    console.log(textoSecreto)
    return textoSecreto;
}

//LLamo a la función de cifrasLetras pasandole como argumento
// el texto a codificar
let mensajeSecreto = cifrasLetras("EstE meNSAjE SirVE para probar COMO NUESTRAS MentES PUedeN hACER cosAS MARAvilloSAS! coSAS ImPreSIONAntES! AL COMIENZO ERA UN pOCO DiFicIL pero ahora, EN esta LINEA tu mente esta LEyenDOLO auTOMAticamente sin SIQUIEra pensarlo.")

mensajeSecreto = cifrasLetras2("EstE meNSAjE SirVE para probar COMO NUESTRAS MentES PUedeN hACER cosAS MARAvilloSAS! coSAS ImPreSIONAntES! AL COMIENZO ERA UN pOCO DiFicIL pero ahora, EN esta LINEA tu mente esta LEyenDOLO auTOMAticamente sin SIQUIEra pensarlo.")

document.getElementById("secreto").textContent = mensajeSecreto;