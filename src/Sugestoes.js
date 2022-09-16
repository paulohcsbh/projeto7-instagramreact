function Sugestao(props){
  return(
    <li class="sugestao">
              <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                  <div class="nome">{props.texto}</div>
                  <div class="razao">{props.segue}</div>
                </div>
              </div>

              <div class="seguir">{props.seguir}</div>
      </li>

  )
}
export default function Sugestoes(){
  const itens = [
    <Sugestao img="assets/img/bad.vibes.memes.svg" texto="bad.vibes.memes" segue="Segue você" seguir="Seguir"/>,
            <Sugestao img="assets/img/chibirdart.svg" texto="chibirdart" segue="Segue você" seguir="Seguir"/>,
            <Sugestao img="assets/img/razoesparaacreditar.svg" texto="razoesparaacreditar" segue="Novo no Instagram" seguir="Seguir"/>,
            <Sugestao img="assets/img/adorable_animals.svg" texto="adorable_animals" segue="Segue você" seguir="Seguir"/>,  
            <Sugestao img="assets/img/smallcutecats.svg" texto="smallcutecats" segue="Segue você" seguir="Seguir"/>  
          
  ]
    return(
        <ul class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {itens.map(item => <li>{item}</li>)}   
          
          </ul>

          
      
    )
}