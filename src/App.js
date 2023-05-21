import React, {useState} from "react";
import Header from "./components/Header";
import "./styles/App.css"
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";
import CardList from "./components/CardList";
import About from "./components/About";
import CardPage from "./components/CardPage";
import img from "./materials/picture.svg";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCardPage, setShowCardPage] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowCardPage(true);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setShowCardPage(false);
    setSelectedCard(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        {showCardPage ? (
          <CardPage
            data={selectedCard}
            onGoBack={handleGoBack}
          />
        ) : (
          <>
            {/* <NavBar /> */}
            <Banner />
            <CategoryList activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            <CardList onCardClick={handleCardClick} activeIndex={activeIndex}/>
            <About />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;