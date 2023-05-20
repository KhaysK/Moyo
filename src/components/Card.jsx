import React from "react";
import clasess from "./styles/Card.module.css"
import MyButton from "../UI/button/MyButton";

function Card({ img, name, description, moneyNeed, moneyGot }) {
    const progress = Math.floor((moneyGot / moneyNeed) * 100);

    return (
        <div className={clasess.container}>
            <div className={clasess.cardImage}>
                <img src={img} alt={name} />
            </div>
            <div className={clasess.innerContainer}>
                <p className={clasess.cardName}>{name}</p>
                <p className={clasess.cardTitle} style={{ color: "#B70505" }}>Диагноз:</p>
                <p className={clasess.cardDescription}>{description}</p>
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
                <p className="card-money-got">Собрано {moneyGot} ₽</p>
                <MyButton>Хочу помочь</MyButton>
            </div>
        </div>
    );
}

export default Card;