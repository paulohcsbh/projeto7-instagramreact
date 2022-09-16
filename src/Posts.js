import React from "react";




export default function Posts(){
  const[toggle, setToggle] = React.useState(true);
  const[toggleS, setToggleS] = React.useState(true);
  const[cor, setCor ] = React.useState("");
  const[contador,setContador] = React.useState(101523)
  const[nome, setNome] = React.useState("heart-outline")
  const[salvar, setSalvar] = React.useState("bookmark-outline")
  
  React.useEffect(()=>{setCor((state)=> (toggle ? "" : "vermelho"))}, [toggle]);
  React.useEffect(()=>{setNome((state)=> (toggle ? "heart-outline" : "heart"))}, [toggle]);
  React.useEffect(()=>{setSalvar((state)=> (toggleS ? "bookmark-outline" : "bookmark"))}, [toggleS]);
  React.useEffect(()=>{setContador((state)=> (toggle ?  101523 : 101523+1))}, [toggle]);

  const[toggleUm, setToggleUm] = React.useState(true);
  const[toggleS1, setToggleS1] = React.useState(true);
  const[corUm, setCorUm ] = React.useState("");
  const[contadorUm,setContadorUm] = React.useState(99159)
  const[nomeUm, setNomeUm] = React.useState("heart-outline")
  const[salvarUm, setSalvarUm] = React.useState("bookmark-outline")
  
  React.useEffect(()=>{setCorUm((state)=> (toggleUm ? "" : "vermelho"))}, [toggleUm]);
  React.useEffect(()=>{setNomeUm((state)=> (toggleUm ? "heart-outline" : "heart"))}, [toggleUm]);
  React.useEffect(()=>{setSalvarUm((state)=> (toggleS1 ? "bookmark-outline" : "bookmark"))}, [toggleS1]);
  React.useEffect(()=>{setContadorUm((state)=> (toggleUm ?  99159 : 99159+1))}, [toggleUm]);

  function Post(props){
  
    return(
      <li class="post">
        <div class="topo">
          <div class="usuario"><img src={props.img}/>{props.texto}</div>
          <div class="acoes">
            <ion-icon name={props.name}></ion-icon>
          </div>
        </div>
        <div class="conteudo">
          <img onClick={props.click} onClick1={props.click1} src={props.img2}/>
        </div>
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon   onClick={props.click} class={props.class} name={props.heart}></ion-icon>
              <ion-icon  name={props.chatbubble}></ion-icon>
              <ion-icon name={props.plane}></ion-icon>
            </div>
            <div>
              <ion-icon  onClick={props.click1} name={props.bookmark}></ion-icon>
          </div>
          
          
          </div>
          <div class="curtidas ">
              <img src={props.img3}/>
              <div class="texto">
                Curtido por <strong>{props.texto3}</strong> e <strong>{props.outras}</strong><strong>{props.contagem}</strong><strong>{props.pessoas}</strong>
              </div>
        </div>
        
        </div>
      </li>
    )
  }

    const posts = [
      <Post 
                img="assets/img/meowed.svg" texto="meowed" name="ellipsis-horizontal" 
                img2="assets/img/gato-telefone.svg"   click={(e) => setToggle((state) => !state)} class={cor}   heart={nome} 
                chatbubble="chatbubble-outline" plane="paper-plane-outline" click1={(e) => setToggleS((state) => !state)} bookmark={salvar}
                img3="assets/img/respondeai.svg"  texto3="respondeai"  outras="outras " contagem={contador} pessoas=" pessoas"
            />,
            <Post 
                img="assets/img/barked.svg" texto="barked" name="ellipsis-horizontal" 
                img2="assets/img/dog.svg"   click={(e) => setToggleUm((state) => !state)} class={corUm}   heart={nomeUm} 
                chatbubble="chatbubble-outline" plane="paper-plane-outline" click1={(e) => setToggleS1((state) => !state)} bookmark={salvarUm}
                img3="assets/img/adorable_animals.svg"  texto3="adorable_animals"  outras="outras " contagem={contadorUm} pessoas=" pessoas"
            />          

    ]
    return(
      
        <ul class="posts">
          {posts.map(post => <li>{post}
          
          
          </li>)} 
          
             
        </ul>
        
    
    )
}