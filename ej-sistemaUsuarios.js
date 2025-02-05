const usuarios = [
    {
        nombre: "Anonim",
        edad: 18,
        email: "anonim@gmai.com",
        saludar: function () {
            console.log(this.nombre)
        }
    },
    {
        nombre: "Minona",
        edad: 13,
        email: "minona@gmai.com",
        saludar: function () {
            console.log(this.nombre)
        }
    },
    {
        nombre: "Pep",
        edad: 45,
        email: "ultra_pep@gmai.com",
        saludar: function () {
            console.log(this.nombre)
        }
    }
]

usuarios.push({
    nombre: "Alicia",
    edad: 40, // Edad aprox
    email: "alicia.vazquez@itb.cat",
    saludar: function () {
        console.log(this.nombre)
    }
})

function mostrarUsuarios(usuarios) {
    for(let i=0; i < usuarios.length; i++){console.log(usuarios[i])}
}

mostrarUsuarios(usuarios)

//console.log("Que tipo es: " + typeof tv.getPrecio())
/*document.getElementById("precio").textContent = tv.getPrecio();
document.getElementById("titular").textContent = tv.getInfo();

console.log(Object.keys(tv));
console.log(Object.values(tv));
console.log(Object.entries(tv));*/
//Ejemplo página 73