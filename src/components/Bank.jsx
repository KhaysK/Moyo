import React, {useState} from "react";
import PaymentMethod from "../UI/card/PaymentMethod";
import visa from "../materials/Visa.svg";
import master from "../materials/MasterCard.svg";
import mir from "../materials/Mir.svg";
import maestro from "../materials/Maestro.svg";

function Bank() {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <p style={{ fontSize: "24px", margin: "16px 0" }}>Способ оплаты</p>
            <div style={{ display: "flex", gap: "32px" }}>
                <PaymentMethod img={master} isActive={activeIndex === 0 ? true : false}
                    onClick={() => handleClick(0)} />
                <PaymentMethod img={visa} isActive={activeIndex === 1 ? true : false}
                    onClick={() => handleClick(1)} />
                <PaymentMethod img={mir} isActive={activeIndex === 2 ? true : false}
                    onClick={() => handleClick(2)} />
                <PaymentMethod img={maestro} isActive={activeIndex === 3 ? true : false}
                    onClick={() => handleClick(3)} />
            </div>
        </div>
    );
}

export default Bank;