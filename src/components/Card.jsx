import React, {useState, useEffect} from "react";
import clasess from "./styles/Card.module.css"
import MyButton from "../UI/button/MyButton";

function Card({ img, name, description, moneyNeed, moneyGot, onCardClick, id, heal }) {
    const [image, setData] = useState([])
    useEffect(() => {
        getData().then((value) => {
            setData(value)
        })
    }, [])

    const getData = async () => {
        const response = await fetch(`https://api.staging.moyo.website/${img}`);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    const progress = Math.floor((moneyGot / moneyNeed) * 100);

    const handleClick = () => {
        let data = {
            id,
            image,
            name,
            description,
            moneyNeed,
            moneyGot,
            heal
        }
        onCardClick(data);
    };
    return (
        <div className={clasess.container}>
            <div className={clasess.cardImage}>
                <img src={image} alt={name} />
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
                <MyButton onClick={handleClick}>Хочу помочь</MyButton>
            </div>
        </div>
    );
}

export default Card;