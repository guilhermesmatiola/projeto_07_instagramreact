import reactDom from "react-dom";
import Left from "./Left"
import Sidebar from "./Sidebar";
export default function Corpo(){

    return(

            <div class="corpo">
               <Left/>
               <Sidebar/>
                
             </div>
    );
}