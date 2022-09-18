import React from "react";
export default function Usuarios(){  
  const [nome, setNome] = React.useState("");
  const [img, setImg] = React.useState("https://cdn-icons-png.flaticon.com/512/18/18601.png")
  function Usuario(props){
    return(
    <li class="usuario">
        <img onClick={props.click} src={props.src} alt={props.alt}/>
        <div class="texto">
          <strong>{props.strong}</strong> 
          <div class="editar">
          <p>{props.p}</p> <span class="lapis" onClick={props.click1}><ion-icon name="pencil"></ion-icon></span>
        </div>
        </div>
        
    </li>
)
  }



    return(
  <ul class="sidebar">
    <Usuario
         click={() => setImg(prompt("Insira a URL da sua imagem"))} src={img} alt="Cadê sua imagem bonitona?"
         
         strong={(nome === "" || nome === null) ? "": nome.toLowerCase().replace(/ /g,"")}
         p={nome} click1={() => setNome(prompt("Qual é o seu nome?"))}
   />
  
  </ul>
  

    )
}
