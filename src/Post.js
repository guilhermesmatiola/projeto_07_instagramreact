import React from "react";

export default function Post(props){

    let outline="heart-outline";
    const [type, setType] = React.useState(outline);
    const [classe, setClas] = React.useState("");

    function Heart(props){
        return(
            <ion-icon name={props.type} class={props.class} onClick={like}></ion-icon>
        );
    }

    function like(){
        if(type==outline){
            setType("heart");
            setClas("like");
        }else{
            setType("heart-outline");
            setClas("");
        }   
    }

    return(
        <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={props.usersrc} />
                            {props.user}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={props.postimg} onDoubleClick={like}/>
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                        <div>
                            <Heart type={type} class={classe} />
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                        </div>

                        <div class="curtidas">
                        <img src={props.likeimg} />
                        <div class="texto">
                            Curtido por <strong>{props.likeuser}</strong> e <strong>outras {props.likes} pessoas</strong>
                        </div>
                        </div>
                    </div>
        </div>
    )
}

//