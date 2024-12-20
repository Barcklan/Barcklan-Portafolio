let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("MicrosoftOffice");
        habilidades[1].classList.add("lenguajeR");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("SQL");
        habilidades[4].classList.add("Vdatos");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
// Función para mostrar el modal
function mostrarModal(texto) {
    const modal = document.getElementById('modal');
    const modalTexto = document.getElementById('modal-texto');
    modalTexto.textContent = texto; // Agregar el texto dinámico
    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function mostrarTooltip(event, texto) {
    // Cerrar otros tooltips abiertos
    document.querySelectorAll('.interes.active').forEach((interes) => {
      interes.classList.remove('active');
    });
  
    // Mostrar el tooltip del botón actual
    const interes = event.currentTarget;
    interes.classList.toggle('active');
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
