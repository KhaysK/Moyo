import React from "react";
import clasess from "./PaymentMethod.module.css"

function PaymentMethod({img, onClick , isActive}) {
    const handleClick = () => {
        onClick();
    };
    
    return (  
        <div onClick={handleClick} className={`${clasess.container} ${isActive ? clasess.active : ""}`}>
            <div className={clasess.icon}></div>
            <img src={img} alt="payment image" />
        </div>
    );

<div>

</div>}

export default PaymentMethod;