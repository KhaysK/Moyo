import React from "react";
import Header from "./components/Header";
import "./styles/App.css"
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <NavBar />
        <Banner />
        <CategoryList />
      </div>
      <Footer />
    </div>
  );
}

export default App;