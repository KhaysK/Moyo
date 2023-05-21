import React from "react";
import logo from "../materials/Logo.svg";

function Footer() {
    return (  
        <div className="footer">
            <img src={logo} alt="Moyo logo" width={150}/>
            <p>Благотворительный фонд использует сайт для сбора не облагаемых налогом пожертвований</p>
        </div>
    );
}

export default Footer;