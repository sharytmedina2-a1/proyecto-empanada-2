let total = 0

function sumar(id){

let cantidad = document.getElementById(id)

cantidad.textContent = parseInt(cantidad.textContent) + 1

}

function restar(id){

let cantidad = document.getElementById(id)

let valor = parseInt(cantidad.textContent)

if(valor > 0){

cantidad.textContent = valor - 1

}

}

function agregar(nombre,precio,id){

let cantidad = parseInt(document.getElementById(id).textContent)

if(cantidad == 0){

alert("Seleccione cantidad")

return

}

let subtotal = precio * cantidad

total += subtotal

document.getElementById("lista").innerHTML +=
`<p>${nombre} x${cantidad} = $${subtotal}</p>`

document.getElementById("total").textContent = total

document.getElementById(id).textContent = 0

}