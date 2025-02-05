const tv={
    nombre:"Samsung 42",
    categoria:"Televisores", 
    tamano:54,
    unidades:4,
    precio:345.95,
    getPrecio:function(){
        return this.unidades*this.precio;
    }, 
    getInfo:function(){
        return `Este televisor ${this.nombre} es maravilloso y su precio de ${this.precio} muy competitivo para una pantalla de ${this.tamano}`
    }
}
//console.log("Que tipo es: " + typeof tv.getPrecio())
document.getElementById("precio").textContent=tv.getPrecio();
document.getElementById("titular").textContent=tv.getInfo();

console.log(Object.keys(tv));
console.log(Object.values(tv));
console.log(Object.entries(tv));
//Ejemplo página 73
//Declaración con literal object
/*
const alumno = {
    nombre: "Aina",
    apellidos: "Garcia López",
    edad: 21,
    curso: "DAMv1"
 };
 
let propiedad = "nombre";
console.log(alumno[propiedad]); //Aina

propiedad = prompt("Qué propiedad quieres consultar", "apellidos");
console.log(alumno[propiedad]); //Garcia López

propiedad = prompt("Añade nueva propiedad", "curso");
let valor = prompt("Su valor", "1ero");
alumno[propiedad]=valor;
console.log(alumno); //{nombre: "Aina", apellidos: "Garcia López", edad: 21, ciclo: "DAMv1", curso: "1ero"}

for (let i =1; i<=3; i++){
   alumno["telefono"+i] = prompt("Telefono"+i,666555777);
}
console.log(alumno);*/
