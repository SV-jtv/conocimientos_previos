let tvSamsung = {
    nombre: "TV Samsung 42",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95
    };
    
    tvSamsung.getImporte = function(){
    return this.unidades * this.precio;
    }
    
    console.log(tvSamsung.getImporte());
    
    //Obtener las propiedades de la TV
    let propiedadesTV = Object.keys(tvSamsung)
    
    //Filtrar las propiedades que no son funciones
    propiedadesTV = propiedadesTV.filter(propiedad => typeof tvSamsung[propiedad] != "function");
    
    //Agregar propiedades adicionales
    propiedadesTV = propiedadesTV.concat(["resolución", "pulgadas", "peso", "color"]);
    
    console.log(propiedadesTV);
    
    let producto = document.getElementById("producto");
    
    for(propiedad in propiedadesTV){
    let input = prompt(`Introduce el valor de la propiedad ${propiedadesTV[propiedad]}`);
    console.log(input.length);
    if(input.length == 0) tvSamsung[propiedadesTV[propiedad]] = "valor no disponible";
    else tvSamsung[propiedadesTV[propiedad]] = input;
    }
    
    for(let propiedad in tvSamsung){
    if(typeof tvSamsung[propiedad] != "function") producto.innerHTML += `<p>${propiedad}: ${tvSamsung[propiedad]}</p>`;
    else producto.innerHTML += `<p>${propiedad}: ${tvSamsung[propiedad]()}</p>`;
}

let stringTv = JSON.parse(tvSamsumg);
let objectTv = JSON.stringify(stringTv);

console.log(stringTv);
console.log(objectTv);