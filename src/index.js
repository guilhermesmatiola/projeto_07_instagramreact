import reactDom from "react-dom";

import Navbar from './Navbar';
import Corpo from './Body';
import MobileMode from './MobileMode';
//import react from "react";

function Rot(){
    return(

        <div>
            <Navbar/>
            <Corpo/>
            <MobileMode/>
        </div>
    );
}

reactDom.render(<Rot />, document.querySelector(".root"));

    

      