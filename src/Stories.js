function Story(props){
    return(
        <li class="story">
            <div class="imagem"><img src={props.img}/></div>
            <div class="usuario">{props.user}</div>
        </li>
    )
}

export default function Stories(){
    const itens = [
    <Story img="assets/img/9gag.svg" user="9gag"/>,
    <Story img="assets/img/meowed.svg" user="meowed"/>,
    <Story img="assets/img/barked.svg" user="barked"/>,
    <Story img="assets/img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet"/>,
    <Story img="assets/img/wawawicomics.svg" user="wawawicomics"/>,
    <Story img="assets/img/respondeai.svg" user="respondeai"/>,
    <Story img="assets/img/filomoderna.svg" user="filomoderna"/>,
    <Story img="assets/img/memeriagourmet.svg" user="memeriagourmet"/>
  ]
    return(
        
            <ul class="stories">
                {itens.map(item => <li>{item}</li>)}                            

                <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </ul>
        
        
    )
}