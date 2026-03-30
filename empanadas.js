const datos = [
  {
    titulo:"🥟Empanadas sin arroz🥟",
    descripcion:"Disfruta nuestras empanadas artesanales, preparadas con masa crujiente y rellenos de solo proteína, sin arroz.",
    clase: "Pollo desmechado, carne sazonada, champiñones, rancheras y hawaianas .",
    imagen: "https://images.cookforyourlife.org/wp-content/uploads/2018/01/Mushroom_empanadas-scaled.jpg"
  },
  {
    titulo: "Empanadas con arroz",
    descripcion: "Empanadas artesanales rellenas con pollo y carne acompañadas de arroz",
    clase: "Pollo, carne, champillon, rancheras, hawuianas",
    imagen: "https://images.cookforyourlife.org/wp-content/uploads/2018/01/Mushroom_empanadas-scaled.jpg"
  },
  {
    titulo: "Otros productos",
    descripcion: "Papas rellenas y cochinos para variar tu experiencia",
    clase: "Pollo, carne, champillon, rancheras, hawuianas",
    imagen: "https://images.cookforyourlife.org/wp-content/uploads/2018/01/Mushroom_empanadas-scaled.jpg"
  }
];

let indice = 0;
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const clase = document.getElementById("clase");
const imagen = document.getElementById("imagen");

function mostrarSlide() {
  const item = datos[indice];
  
 
  imagen.classList.remove("visible");
  
  setTimeout(() => {
    titulo.textContent = item.titulo;
    descripcion.textContent = item.descripcion;
    clase.textContent = item.clase;
    imagen.src = item.imagen;
    
  
    imagen.classList.add("visible");
  }, 500);

  indice = (indice + 1) % datos.length;
}


mostrarSlide();

setInterval(mostrarSlide, 5000);