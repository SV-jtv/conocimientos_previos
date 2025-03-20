class TargetaCredito {
    //Propiedades privadas
    #numeroTarjeta;
    #cvv;

    //Y las que quiera públicas que no esten en el constructor
    fechaCaducidad;
    estado;

    constructor(propietario) {
        this.saldo = 1000;
        this.propietario = propietario;
        this.#numeroTarjeta = "1234 5678 9109 8765";
        this.#cvv = "123";
        this.fechaCaducidad = "01/01/2001";
        this.estado = false;
        this.informa = function () {
            console.log("Targeta de credito nueva añadida");
        };
    }
    //Métodos que definen el comportamiento
    pagar(gasto) {
        if (this.estado == true) {
            if (gasto < this.saldo) {
                console.log("Pago exitoso");
                this.saldo -= gasto;
            } else { console.log("Saldo insuficiente"); }
        } else { console.log("La tarjeta está anulada"); }
    }
    ingresar(ingreso) {
        if (this.estado == true) {
            if (this.estado == true) {
                this.saldo += ingreso;
                console.log(ingreso + "€ Ingresados exitosamente");
            }
        } else { console.log("La tarjeta está anulada"); }
    }
    activarTarjeta() {
        //dueño = prompt("Introduzca el propietario");
        if (this.estado == false) {
            this.estado = true;
            console.log("Tarjeta activada");
        } else if (this.estado == true) {
            console.log("La tarjeta ya estaba activada");
        }
    }
    anularTarjeta() {
        //dueño = prompt("Introduzca el propietario");
        if (this.estado == true) {
            this.estado = false;
            console.log("Tarjeta anulada");
        } else if (this.estado == false) {
            console.log("La tarjeta ya estaba anulada");
        }
    }
    modificarPin(pin) {
        if (this.estado == true) {
            this.cvv = pin;
            console.log("CVV cambiado correctamente")
        } else { console.log("La tarjeta está anulada"); }
    }
    calcularSaldo() { console.log("Saldo actual: " + this.saldo + "€"); }

    //getters y setters
    get numeroTarjeta() { return this.#numeroTarjeta }
    set numeroTarjeta(numeroTarjeta) { this.#numeroTarjeta = numeroTarjeta; }
    get cvv() { return this.#cvv }
    set cvv(cvv) { this.#cvv = cvv; }
    get informacion() {
        console.log(`El numero de mi Targeta de credito
            es ${this.#numeroTarjeta} 
            con el propietario ${this.propietario}
            con la caducidad ${this.fechaCaducidad}
            con el saldo ${this.saldo}`)
    }
} //Fin TargetaCredito


const miTargetaCredito = new TargetaCredito("Saray");
miTargetaCredito.activarTarjeta();
miTargetaCredito.pagar(100);
miTargetaCredito.calcularSaldo();
miTargetaCredito.ingresar(500);
miTargetaCredito.calcularSaldo();
miTargetaCredito.informacion();
