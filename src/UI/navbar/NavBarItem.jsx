import React from "react";
import classes from "./NavBarItem.module.css"

function NavBarItem({ text, isActive, onClick }) {
    const handleClick = () => {
        onClick();
    };

    return (
        <div
            className={`${classes.navItem} ${isActive ? classes.active : ""}`}
            onClick={handleClick}
        >
            {text}
        </div>
    );
}

export default NavBarItem;
