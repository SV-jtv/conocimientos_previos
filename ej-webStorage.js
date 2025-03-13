console.log(localStorage);

document.getElementById("addAlumno").addEventListener("click", addAlumno);
document.getElementById("delLocalStorage").addEventListener("click", delLocalStorage());

//Añadimos un nuevo alumno creando un objeto y serializandolo.
function addAlumno(event) {
    const alumno = {
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        curso: document.getElementById('curso').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value

    };
    console.log(alumno);
    //Serializamos u almacenamos en el localStorage con clave "alumno+i"
    alumnoSerialized = JSON.stringify(alumno);
    localStorage.setItem('alumno' + localStorage.length, alumnoSerialized);
};

//Eliminamos todos los items del localStorage
function delLocalStorage(event) {
    for (key in localStorage) {
        localStorage.removeItem(key);
    }
};

/*
<div id="addAlumno">
        <p id="nombre">Saray</p>
        <p id="apellidos">Varela Torres</p>
        <p id="curso">DAM</p>
        <p id="fechaNacimiento">19/03/2006</p>
    </div>
    <div id="delLocalStorage"></div>
*/
