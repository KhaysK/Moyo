import React from "react";
import Header from "./components/Header";
import "./styles/App.css"
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";
import CardList from "./components/CardList";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <NavBar />
        <Banner />
        <CategoryList />
        <CardList />
        <About/>
      </div>
      <Footer />
    </div>
  );
}

export default App;