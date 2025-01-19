const linkIns = document.getElementById("ins");
const linkFac = document.getElementById("fa");
const linkTik = document.getElementById("tik");
const navRedes = document.getElementById("navRedesBanner")
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