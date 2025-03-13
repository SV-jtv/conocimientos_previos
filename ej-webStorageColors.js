function addUser(){
    if(localStorage.getItem("usuario") === null){
        let user = {};
        user.nombre = prompt("Dime tu nombre:");
        user.colorFondo = prompt("Dime el color del fondo que deseas:");
        user.fuente = prompt("Dime el color de la letra:");

        localStorage.setItem("usuario", JSON.stringify(user));
    } else {
        let user = JSON.parse(localStorage.getItem("usuario"))
        document.getElementById("nombre").textContent = `¡Hola, ${user.nombre}!`

        document.body.style.backgroundColor = user.colorFondo;
        document.body.style.color = user.fuente;
    }
}

//Eliminamos todos los items del localStorage
function delLocalStorage(event) {
    for (key in localStorage) {
        localStorage.removeItem(key);
    }
};

addUser();
document.getElementById("delLocalStorage").addEventListener("click", delLocalStorage());
