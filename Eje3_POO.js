// Eje3_POO.js (main)
import { Guerrero } from "./ej3-Guerrero.js";
import { Mago } from "./ej3-Mago.js";

let p1 = new Persona("Alicia", 45);
let p2 = new Persona("Zoilo", 15);

console.log("p1>p2?");
console.log(p1>p2);

console.log("p1 " + p1); //Busca el valueOf
console.log(`p1  ${p1}`); //Busca el toString
console.log(p1);
