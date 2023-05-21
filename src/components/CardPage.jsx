import React, { useState, useEffect } from "react";
import CardPageImage from "./CardPageImages";
import Crypto from "./Crypto";
import CardPageInfo from "./CardPageInfo";
import NavBar from "./NavBar";
import Bank from "./Bank";

function CardPage({ data, onGoBack }) {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
            <div style={{ display: "flex", gap: "34px" }}>
                <CardPageImage img={data.image} />
                <CardPageInfo
                    key={data.id}
                    img={data.image}
                    name={data.name}
                    description={data.description}
                    moneyNeed={data.moneyNeed}
                    moneyGot={data.moneyGot}
                    onCardClick={onGoBack}
                    heal={data.heal}
                />
            </div>
            <p style={{ fontSize: "56px" }}>Сделать пожертвование</p>
            <NavBar Active={setActiveIndex} />
            {activeIndex == 1 ? (
                <Crypto />
            ) : (
                <Bank />
            )}
            
            
        </div>
    );
}

export default CardPage;