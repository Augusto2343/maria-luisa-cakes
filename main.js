const linkIns = document.getElementById("ins");
const linkFac = document.getElementById("fa");
const linkTik = document.getElementById("tik");
const navRedes = document.getElementById("navRedesBanner");
const navbar = document.querySelector(".navbar");
const btnPres = document.querySelector(".btnPreHeader");
const btnDesplNav = document.getElementById("desplegar");
const divisionLogoLink = document.getElementById("divisionLogoLink");
const header = document.querySelector(".header");
const navLat = document.getElementById("navRedesBanner")
linkIns.onmouseenter = () => {
    linkIns.classList.add("fa-bounce");
    linkFac.classList.remove("fa-bounce");
    linkTik.classList.remove("fa-bounce");
}
linkFac.onmouseenter = () => {
    linkIns.classList.remove("fa-bounce");
    linkFac.classList.add("fa-bounce");
    linkTik.classList.remove("fa-bounce");
}
linkTik.onmouseenter = () => {
    linkIns.classList.remove("fa-bounce");
    linkFac.classList.remove("fa-bounce");
    linkTik.classList.add("fa-bounce");
}
navRedes.onmouseleave = () =>{
    linkIns.classList.remove("fa-bounce");
    linkFac.classList.remove("fa-bounce");
    linkTik.classList.remove("fa-bounce");
}

/* Loader */
$(document).ready(function () {
    // Esperar 3 segundos antes de ocultar el loader
    setTimeout(function () {
        $(".loader").fadeOut("slow", function () {
            $(this).remove(); // Elimina el loader del DOM
            $(".contenido-principal").fadeIn("slow"); // Muestra el contenido
        });
    }, 1000); // Ajusta el tiempo aquí (milisegundos)
});

btnDesplNav.onclick= () =>{
    header.classList.toggle("mostrar")
    navbar.classList.toggle("mostrar");
    btnPres.classList.toggle("mostrar");
    divisionLogoLink.classList.toggle("mostrar");

    navbar.classList.toggle("ocultar");
    btnPres.classList.toggle("ocultar");
    divisionLogoLink.classList.toggle("ocultar");
    btnDesplNav.classList.toggle("fa-bars");
    btnDesplNav.classList.toggle("fa-x");

}
navLat.onmouseenter = () =>{
    navLat.classList.remove("navOculto");
}
navLat.onmouseleave = () =>{
    navLat.classList.add("navOculto");
}