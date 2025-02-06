const usuarios = {
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

usuarios.push({
    nombre: "Alicia",
    edad: 40, // Edad aprox
    email: "alicia.vazquez@itb.cat",
    saludar: function () {
        console.log(this.nombre)
    }
})

function mostrarUsuarios(usuarios) {
    let info = ""
    for(let i=0; i < usuarios.length; i++){
        info = "Nombre: "+usuarios[i].nombre+", Edad: "+usuarios[i].edad+", Email: "+usuarios[i].email
        console.log(info)
    }
}

mostrarUsuarios(usuarios);