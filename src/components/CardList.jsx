import React, { useState, useEffect } from "react";
import Card from "./Card";
import img from "../materials/picture.svg";

function CardList({onCardClick, activeIndex }) {
    const [data, setData] = useState([])
    useEffect(() => {
        getData().then((value) => {
            setData(value)
        })
    }, [])
    console.log(data);
    const getData = async () => {
        const data = await fetch('https://api.moyo.website/posts')
            .then(async (data) => await data.json())
            .catch(console.log)
        return data
    }

    const filteredData = data.filter((item) => item.age === activeIndex);

    return (
        <div>
            <p style={{ fontSize: "36px" }}>Помощь детям</p>
            <div className="cardList">
                {filteredData.map(card => (
                    <Card
                        key={card.id}
                        img={card.image}
                        name={card.name}
                        description={card.description}
                        moneyNeed={card.sum}
                        moneyGot={card.balance}
                        onCardClick={onCardClick}
                        id={card.id}
                        heal={card.heal}
                    />
                ))}
            </div>
        </div>

    );
}

export default CardList;