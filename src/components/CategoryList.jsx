import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const info = [
    { img: require('../materials/category_1.svg').default, title: 'Помощь детям' },
    { img: require('../materials/category_2.svg').default, title: 'Помощь пожилым' },
    { img: require('../materials/category_3.svg').default, title: 'Донорство' },
    { img: require('../materials/category_4.svg').default, title: 'Помощь животным' },
    { img: require('../materials/category_5.svg').default, title: 'Перечень мероприятий' },
    { img: require('../materials/category_6.svg').default, title: 'Помощь на строительство' },
    { img: require('../materials/category_7.svg').default, title: 'Помощь нуждающимся' },
    { img: require('../materials/category_8.svg').default, title: 'Помощь волонтерам' },
    { img: require('../materials/category_9.svg').default, title: 'Помощь детским домам' },
    { img: require('../materials/category_10.svg').default, title: 'Помощь школам' },
]

function CategoryList() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <p style={{fontSize:"36px"}}>Проекты помощи</p>
            <div className="categoryList">
                {info.map((item, index) =>
                    <CategoryItem
                        text={item.title}
                        image={item.img}
                        isActive={activeIndex === index ? true : false}
                        onClick={() => handleClick(index)}
                    />
                )}
            </div>
        </div>

    );
}

export default CategoryList;