import React from "react";
import Header from "./components/Header";
import First from "./components/First";
import Aboutme from "./components/Aboutme";
import Educations from "./components/Educations";
import Skills from "./components/Skills";
import "./css/app.css";

const App = () => {
  return (
    <>
      <div className="main-content">
        <Header />
        <First />
        <Aboutme />
        <Skills />
        <Educations />
      </div>
    </>
  );
};

export default App;
