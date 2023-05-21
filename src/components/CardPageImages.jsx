import React from "react";
import clasess from "./styles/CardPageImage.module.css"

function CardPageImage({ img, }) {
    return (
        <div className={clasess.container}>
            <img src={img} style={{borderRadius:"40px", width:"100%"}} alt="main image" />
            <div className={clasess.imgBox}>
                <img src={img} alt="main image" />
                <img src={img} alt="main image" />
                <img src={img} alt="main image" />
            </div>
        </div>
    );
}

export default CardPageImage;