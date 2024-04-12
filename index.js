const navbar=document.querySelector("nav");
const openmenu=document.getElementById("menu-button");
const closemenu=document.getElementById("close-button");

openmenu.addEventListener("click",()=>{
    navbar.classList.add("open");
});

closemenu.addEventListener("click",()=>{
    navbar.classList.remove("open");
});
