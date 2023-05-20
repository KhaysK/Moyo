import React, { useState } from "react";
import Card from "./Card";
import img from "../materials/picture.svg"

function CardList() {
    return (
        <div>
            <p style={{ fontSize: "36px" }}>Помощь детям</p>
            <div className="cardList">
                <Card
                    img={img}
                    name={'Рон Уизли'}
                    description={'Врожденный порок сердца, корригированный (стеноз аортального клапана, дилатация восходящей аорты).'}
                    moneyNeed={600000}
                    moneyGot={200000}
                />
                
                <Card
                    img={img}
                    name={'Рон Уизли'}
                    description={'Врожденный порок сердца, корригированный (стеноз аортального клапана, дилатация восходящей аорты).'}
                    moneyNeed={600000}
                    moneyGot={200000}
                />

                <Card
                    img={img}
                    name={'Рон Уизли'}
                    description={'Врожденный порок сердца, корригированный (стеноз аортального клапана, дилатация восходящей аорты).'}
                    moneyNeed={600000}
                    moneyGot={200000}
                />

                <Card
                    img={img}
                    name={'Рон Уизли'}
                    description={'Врожденный порок сердца, корригированный (стеноз аортального клапана, дилатация восходящей аорты).'}
                    moneyNeed={600000}
                    moneyGot={200000}
                />
            </div>
        </div>

    );
}

export default CardList;