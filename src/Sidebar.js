import UserLog from "./UserLog";
import Sugestions from "./Sugestions";

const user=[

    {
        usersrc:"assets/img/catanacomics.svg",
        user:"catanacomics",
        username:"Catana"
    }

];

const sugestion=[

    {
        src:"assets/img/bad.vibes.memes.svg"
    },
    {
        src:"assets/img/chibirdart.svg",
        user:"chibirdart"
    },
    {
        src:"assets/img/razoesparaacreditar.svg",
        user:"razoesparaacreditar"
    },
    {
        src:"assets/img/adorable_animals.svg",
        user:"adorable_animals"
    },
    {
        src:"assets/img/smallcutecats.svg",
        user:"smallcutecats"
    }
];

export default function Sidebar(){

    return(
        <div class="sidebar">

                
                {user.map((user) => (<UserLog usersrc={user.usersrc} user={user.user} username={user.username}/>))}

                
            <div class="sugestoes">
                <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>

                {sugestion.map((sugestion) => (<Sugestions src={sugestion.src} user={sugestion.user}/>))}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
        
    );
}