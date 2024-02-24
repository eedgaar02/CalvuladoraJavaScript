const pantalla = document.getElementById("pantalla"); //constante que obtiene el elemento con id pantalla
const botones = document.querySelectorAll("button"); //constante que almacen todos los botones del documento

//for eacho con evento listener click
botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent; //constante almacena el contenido de cada boton

        //Condicional tecla borrar
        if(boton.id === "borrar"){
            pantalla.textContent = "0";
            return;
        }
        //Condicional tecla retroceso
        if(boton.id === "retroceso"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        //Condicional tecla igual
        if(boton.id === "="){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error"
            }
            return;
        }
        //Condicional control de salida por pantalla
        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado
        }
    })
    
})