import React from "react";
import MyButton from "../UI/button/MyButton";
import ProfileIcon from "../UI/profile/ProfileIcon";
import logo from "../materials/Logo.svg";
import profileLogo from "../materials/profileLogo.svg";

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Moyo logo" />
            <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"20px"}}>
                <MyButton>Хочу помочь</MyButton>
                <ProfileIcon image={profileLogo}/>
            </div>
        </div>
    );
}

export default Header;