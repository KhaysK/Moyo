import React from "react";
import logo from "../materials/LogoB.svg";
import AboutBlock from "../UI/about/AboutBlock";
import icon1 from '../materials/icon1.svg';
import icon2 from '../materials/icon2.svg';
import about from '../materials/aboutUs.svg';
import clasess from './styles/About.module.css'
import StatBlock from "../UI/about/StatBlock";
import stat1 from "../materials/stat1.svg";
import stat2 from "../materials/stat2.svg";
import stat3 from "../materials/stat3.svg";
import stat4 from "../materials/stat4.svg";
import phone from "../materials/Phone.svg";
import MyButton from "../UI/button/MyButton";

function About() {
    return (
        <div className={clasess.container}>
            <p style={{ fontSize: "36px", marginBottom:'42px' }}>О нас</p>
            <div style={{ display: 'flex', justifyContent:"center"}}>
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
            <div style={{display:"flex", gap:"24px"}}>
                <StatBlock img={stat1} title={'Людей поддержали наш фонд'} data={'22 417'}/>
                <StatBlock img={stat4} title={'Спасённых жизней'} data={'215'}/>
                <StatBlock img={stat2} title={'Волонтера'} data={'332'}/>
                <StatBlock img={stat3} title={'Миллиона рублей пожертвования'} data={'432'}/>
            </div>
            <div style={{display:"flex", gap:"100px", marginTop:"112px"}}>
                <img src={phone} alt="phone image" />
                <div style={{width:"907px", display:"flex", gap:"20px", flexDirection:"column"}}>
                    <p style={{fontSize:"64px", fontWeight:"700"}}>Делайте добро всегда и везде с нашим мобильным приложением</p>
                    <p style={{width:"678px", fontSize:"24px", color:"#888888", marginBottom:"20px"}}>Наше мобильное приложение для благотворительности - это удобный и простой способ сделать доброе дело в любое время и в любом месте. С его помощью вы можете выбрать проект или организацию, которым хотите помочь, и сделать пожертвование всего в несколько кликов.</p>
                    <MyButton>Скачать</MyButton>
                </div>
            </div>
        </div>
    );
}

export default About;