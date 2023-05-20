import React, { useState } from "react";
import NavBarItem from "../UI/navbar/NavBarItem";

function NavBar() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="navbar">
            <NavBarItem
                text="Главная"
                isActive={activeIndex === 0 ? true : false}
                onClick={() => handleClick(0)}
            />
            <NavBarItem
                text="Рыба"
                isActive={activeIndex === 1 ? true : false}
                onClick={() => handleClick(1)}
            />
            <NavBarItem
                text="Рыба"
                isActive={activeIndex === 2 ? true : false}
                onClick={() => handleClick(2)}
            />
            <NavBarItem
                text="Рыба"
                isActive={activeIndex === 3 ? true : false}
                onClick={() => handleClick(3)}
            />
            <NavBarItem
                text="Рыба"
                isActive={activeIndex === 4 ? true : false}
                onClick={() => handleClick(4)}
            />
            <NavBarItem
                text="Рыба"
                isActive={activeIndex === 5 ? true : false}
                onClick={() => handleClick(5)}
            />
        </div>
    );
}

export default NavBar;