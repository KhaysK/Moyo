import React from "react";
import clasess from "./ProfileIcon.module.css";

function ProfileIcon({image ,...props}) {
    return (  
        <div {...props} className={clasess.profile}>
            <img src={image} alt="Profile image" />
        </div>
    );
}

export default ProfileIcon;