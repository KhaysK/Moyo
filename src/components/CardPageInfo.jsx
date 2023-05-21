import React from "react";
import clasess from "./styles/CardPageInfo.module.css";

function CardPageInfo({ name, description, moneyGot, moneyNeed, onCardClick, heal}) {
    const progress = Math.floor((moneyGot / moneyNeed) * 100);
    
    const handleClick = () => {
        onCardClick();
    };

    return (
        <div>
            <div className={clasess.container}>
                <p onClick={handleClick} style={{ fontSize: "32px", alignSelf: "flex-start" }} >Главная/{name}</p>
                <p className={clasess.cardName}>{name}</p>
                <p className={clasess.cardTitle} style={{ color: "#B70505" }}>Диагноз:</p>
                <p className={clasess.cardDescription} style={{ maxHeight: "306px" }}>{description}</p>
                <p className={clasess.cardTitle} style={{ color: "#B70505" }}>Требуется лечение:</p>
                <p className={clasess.cardDescription}>{heal}</p>
                <div className={clasess.cardTitle} style={{ width: "100%", display: 'flex', justifyContent: 'space-between' }}>
                    <span>Пожертвовано</span>
                    <span>{progress}%</span>
                </div>
                <div className={clasess.cardProgress}>
                    <div
                        className={clasess.cardProgressBar}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p style={{ fontSize: "32px" }}>Собрано {moneyGot} ₽</p>
            </div>
        </div>
    );
}

export default CardPageInfo;