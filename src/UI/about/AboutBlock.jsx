import React from "react";
import clasess from "./AboutBlock.module.css";

function AboutBlock({text, img, title}) {
    return (  
        <div className={clasess.block}>
            <div className={clasess.title}>
                <img src={img} alt="block icon" style={{marginRight:"14px"}}/>
                {title}
            </div>
            <p>{text}</p>
        </div>
    );
}

export default AboutBlock;