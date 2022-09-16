import React from "react";
export default function Usuarios(){  
  const [nome, setNome] = React.useState("");
  const [img, setImg] = React.useState("https://cdn-icons-png.flaticon.com/512/18/18601.png")

    return(
  <div class="sidebar">
  <div class="usuario">
    <img onClick={() => setImg(prompt("Insira a URL da sua imagem"))} src={img} alt="Cadê sua imagem bonitona?" />
    <div class="texto">
      <strong>{(nome === "" || nome === null) ? "": nome.toLowerCase().replace(/ /g,"")}</strong>
      <div class="editar">
      <p>{nome}</p> <span class="lapis" onClick={() => setNome(prompt("Qual é o seu nome?"))}><ion-icon name="pencil"></ion-icon></span>
      </div>
    </div>
  </div>
  </div>
  

    )
}
