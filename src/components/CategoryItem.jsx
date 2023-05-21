import React from "react";
import clasess from "./styles/CategoryItem.module.css"

function CategoryItem({ image, text, isActive, onClick }) {
    const handleClick = () => {
        onClick();
    };
    return (
        <div className={clasess.container} onClick={handleClick}>
            <div className={`${clasess.imgBox} ${isActive ? clasess.active : ""}`}>
                <img className={clasess.img} src={image} alt="Category image" />
            </div>
            <p>{text}</p>
        </div>
    );
}

export default CategoryItem;