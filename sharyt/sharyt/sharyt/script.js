let cantidades = [0,0];

function cambiarCantidad(index, cambio){
    cantidades[index] += cambio;

    if(cantidades[index] < 0){
        cantidades[index] = 0;
    }

    document.getElementById("cant"+index).innerText = cantidades[index];
}

function agregarCarrito(index, nombre, precio){
    if(cantidades[index] === 0){
        alert("Selecciona cantidad");
        return;
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        producto:nombre,
        precio:precio,
        cantidad:cantidades[index]
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito");

    cantidades[index] = 0;
    document.getElementById("cant"+index).innerText = 0;
}

/* MODAL */
function abrirModal(){
    document.getElementById("modal").style.display="flex";
}

function cerrarModal(){
    document.getElementById("modal").style.display="none";
}

function login(){
    alert("Simulación de login");
}
