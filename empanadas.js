const datos = [
    {
      titulo: "Empanadas Con Arroz",
    sinArroz: "Con arroz",
    tipo: "Empanadas artesanales rellenas con pollo y carne de buena calidad acompañadas de arroz ",
    clase: "Acompañadas de arroz para una experiencia completa",
    imagen: "img/empanada1.jpg"

    },
    {
    titulo: "Otros",
    sinArroz: "Mas Productos para el deleite",
    tipo: "Papas rellenas y Cochinos ",
    clase: "Acompañadas de arroz para una experiencia completa",
    imagen: "img/empanada2.jpg"
    }
]

let indice = 0;
const titulo = document.getElementById("titulo");
const sinArroz = document.getElementById("sinArroz");
const tipo = document.getElementById("tipo");
const clase = document.getElementById("clase");
const imagen = document.getElementById("imagenEmpanada");

function cambiarContenido() {
    indice++;
    if (indice >= datos.length) {
        indice = 0;
    }
    titulo.textContent = datos[indice].titulo;
    sinArroz.textContent = datos[indice].sinArroz;
    tipo.textContent = datos[indice].tipo;
    clase.textContent = datos[indice].clase;
    imagen.src = datos[indice].imagen;
}

setInterval(cambiarContenido, 4000);
