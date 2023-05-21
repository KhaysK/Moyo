import React from "react";
import clasess from "./PaymentMethod.module.css"

function PaymentMethod({img}) {
    return (  
        <div className={clasess.container}>
            <div className={clasess.icon}></div>
            <img src={img} alt="payment image" />
        </div>
    );

<div>

</div>}

export default PaymentMethod;