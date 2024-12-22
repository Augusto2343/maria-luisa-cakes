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