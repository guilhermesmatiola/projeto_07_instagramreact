export default function UserLog(props){

    return(
            <div class="usuario">
                    <img src={props.usersrc}/>
                    <div class="texto">
                        <strong>{props.user}</strong>
                        {props.username}
                    </div>
            </div>
    );
}