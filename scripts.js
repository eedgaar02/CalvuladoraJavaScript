const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent;

        if(pantalla.textContent === "0"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado
        }
    })
})