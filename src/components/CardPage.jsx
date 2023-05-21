import React, {useState, useEffect} from "react";
import CardPageImage from "./CardPageImages";
import Crypto from "./Crypto";
import CardPageInfo from "./CardPageInfo";
import NavBar from "./NavBar";
import img from "../materials/picture.svg";

function CardPage({ data, onGoBack}) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
            <div style={{ display: "flex", gap: "34px" }}>
                <CardPageImage img={img} />
                <CardPageInfo
                    key={data.id}
                    img={img}
                    name={data.name}
                    description={data.description}
                    moneyNeed={data.moneyNeed}
                    moneyGot={data.moneyGot}
                    onCardClick={onGoBack}
                    heal={data.heal}
                />
            </div>
            <p style={{ fontSize: "56px" }}>Сделать пожертвование</p>
            <NavBar />
            <Crypto />
        </div>
    );
}

export default CardPage;