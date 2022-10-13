const inputs = document.querySelectorAll("[validacion__input]");

const mensajes = {
    valueMissing: "El campo no puede quedar vacío",
    typeMismatch: "El email no tiene un formato adecuado",
    patternMismatch: "No se permite números o carácteres especiales"
}

const tiposErrores =[
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        let elemento = input.target;
        let elementoPadre = elemento.parentElement;
        tiposErrores.forEach( error =>{
            if(elemento.validity.valid){
                elementoPadre.classList.remove("error");
                elementoPadre.querySelector("span").innerHTML=""
            }else if(elemento.validity[error]){
                elementoPadre.classList.add("error");
                setTimeout(()=>{elementoPadre.querySelector("span").innerHTML= mensajes[error]}, 300)
            }
        })
    })
})