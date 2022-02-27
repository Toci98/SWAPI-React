import React, {FC, useState, useEffect} from "react";

const Character:FC<{name: string; eye_color: string; gender: string; mass: string}> = ({name, eye_color, gender, mass}) => {
const [nombre,setNombre] = useState<string>(name);
const [colorOjos,setOjos] = useState<string>(eye_color);
const [genero,setGenero] = useState<string>(gender);
const [masa,setMasa] = useState<string>(mass);
    return <div onClick={() => {
        createDiv(nombre,colorOjos,genero,masa);
    }}>
        <div id={nombre}>
        <h1>{nombre}</h1>
        </div>  
    </div>
}
export default Character;

const createDiv = (nombre: string,colorOjos: string, genero: string, masa: string) => {
    console.log(nombre);
    const div = document.createElement("div");
    div.id = nombre + "Atributos";
    if(document.getElementById(nombre + "Atributos") == null){
        document.getElementById(nombre)?.appendChild(div);
        const div1 = document.createElement("div");
        div1.textContent = "-Eye color: " + colorOjos;
        const div2 = document.createElement("div");
        div2.textContent = "-Gender: " + genero;
        const div3 = document.createElement("div");
        div3.textContent = "-Mass: " + masa + "kg";
        const aux = document.getElementById(nombre + "Atributos");
        aux?.appendChild(div1);
        aux?.appendChild(div2);
        aux?.appendChild(div3);
        console.log(aux);
    }else{
        console.log("a");
    }
    
}
