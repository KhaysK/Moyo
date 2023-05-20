import React from "react";
import Header from "./components/Header";
import "./styles/App.css"
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;