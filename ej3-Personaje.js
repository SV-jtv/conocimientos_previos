// Personaje.js
// Clase base Personaje
export class Personaje {
    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }
    toString() { //Segundo
        return this.nombre;
    }
    valueOf() {//Primero
        return "Nivel: " + this.nivel + "puntos de vida: " + this.puntosDeVida;
    }
    atacar(ataque) {
        console.log('Ataque con 
            ${ataque}
            de fuerza')
    }
}
