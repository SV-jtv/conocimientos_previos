const usuarios = [
    {
        nombre: "Anonim",
        edad: 18,
        email: "anonim@gmai.com",
        saludar: function () {
            console.log("Hola "+this.nombre)
        }
    },
    {
        nombre: "Minona",
        edad: 13,
        email: "minona@gmai.com",
        saludar: function () {
            console.log("Hola "+this.nombre)
        }
    },
    {
        nombre: "Pep",
        edad: 45,
        email: "ultra_pep@gmai.com",
        saludar: function () {
            console.log("Hola "+this.nombre)
        }
    }
]

usuarios.push({
    nombre: "Alicia",
    edad: 40, // Edad aprox
    email: "alicia.vazquez@itb.cat",
    saludar: function () {
        console.log("Hola "+this.nombre)
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
usuarios.forEach(usuarios => usuarios.saludar());
