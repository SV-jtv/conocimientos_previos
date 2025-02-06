const coche = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020,
        encendido: false,
        arrancar: function () {
            console.log(this.marca)
        },
        apagar: function () {
            console.log(this.marca)
        },
        recorrer: function (km) {
            console.log(this.marca)
        }
}

function mostrarUsuarios(coche) {
    let info = ""
    for(let i=0; i < coche.length; i++){
        info = "Nombre: "+coche[i].nombre+", Edad: "+coche[i].edad+", Email: "+coche[i].email
        console.log(info)
    }
}

mostrarUsuarios(coche);
coche.forEach(coche => coche.saludar());