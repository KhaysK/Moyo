import React from "react";
import logo from "../materials/LogoB.svg";
import AboutBlock from "../UI/about/AboutBlock";
import icon1 from '../materials/icon1.svg';
import icon2 from '../materials/icon2.svg';
import about from '../materials/aboutUs.svg';
import clasess from './styles/About.module.css'

function About() {
    return (
        <div>
            <p style={{ fontSize: "36px", marginBottom:'42px' }}>О нас</p>
            <div style={{ display: 'flex' }}>
                <div className={clasess.about}>
                    <img src={logo} alt="Moyo logo" width={200} />
                    <p className={clasess.desription}>Наш благотворительный фонд основан с целью помощи людям, которые оказались в трудной жизненной ситуации. Мы стремимся помочь каждому, кто нуждается в нашей поддержке, независимо от возраста, пола, национальности или вероисповедания.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <AboutBlock img={icon1} title={'Наша миссия'} text={'Мы стремимся к созданию лучшего мира, где все люди имеют равные возможности и живут в гармонии с природой.'} />
                        <AboutBlock img={icon2} title={'Наше видение'} text={'Наше видение - это мир, где все люди имеют доступ к образованию, здравоохранению, питанию, жилью и чистой воде. '} />
                    </div>
                </div>
                <img src={about} alt="Moyo logo" />
            </div>
        </div>
    );
}

export default About;