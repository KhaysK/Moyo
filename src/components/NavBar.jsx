import React, { useState } from "react";
import NavBarItem from "../UI/navbar/NavBarItem";

function NavBar({Active}) {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        Active(index);
        setActiveIndex(index);
    };

    return (
        <div className="navbar">
            <NavBarItem
                text="Онлайн перевод"
                isActive={activeIndex === 0 ? true : false}
                onClick={() => handleClick(0)}
            />
            <NavBarItem
                text="Оплата криптовалютой"
                isActive={activeIndex === 1 ? true : false}
                onClick={() => handleClick(1)}
            />
            <NavBarItem
                text="По SMS"
                isActive={activeIndex === 2 ? true : false}
                onClick={() => handleClick(2)}
            />
            <NavBarItem
                text="Банковский перевод"
                isActive={activeIndex === 3 ? true : false}
                onClick={() => handleClick(3)}
            />
        </div>
    );
}

export default NavBar;