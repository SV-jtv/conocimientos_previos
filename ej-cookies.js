function crearCookies() {
    //Preguntamos el nombre
    let nombre = prompt("Cual es tu nombre?");

    //Preguntamos su comida preferida
    let comidaPreferida = prompt("Cual es tu comida preferida?");

    //Creamos la cookie
    document.cookie = "nombre=" + nombre;
    document.cookie = "comidaPreferida=" + comidaPreferida;
};

function visualizaCookies() {
    //Visualizamos
    //console.log(document.cookie);

    //Todas las cookies estan separadas por ";", lo que es interesante crear un array para que sea más facil rellenar lo
    var misCookies = document.cookie;
    var arrayCookies = misCookies.split(";");

    var comida;
    var nombre;
    arrayCookies.map(
        (cookie) => {
            c = cookie.split("=");
            console.log(c);
            if (c[0].includes("comidaPreferida")) {
                comida = c[1];
            }
            if (c[0].includes("nombre")) {
                nombre = c[1];
            }
        }
    );
    //alert("A " + nombre + " le encanta el " + comida);
    return nombre + ";" + comida
};

function eliminarCookies() {
    document.cookie.split(";").forEach(function (c) {
        document.cookie = c + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    })
};

function iniciCookies() {
    let data = visualizaCookies();
    var arrayCookies = data.split(";");
    if (arrayCookies[0] != "undefined") {
        alert("A " + arrayCookies[0] + " le encanta el " + arrayCookies[1]);
    }else {
        crearCookies();
        let data = visualizaCookies();
        var arrayCookies = data.split(";");
        alert("A " + arrayCookies[0] + " le encanta el " + arrayCookies[1]);
    }
};

//crearCookies();
//console.log(visualizaCookies());
//eliminarCookies();
iniciCookies();