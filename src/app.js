import React from "react";
import Header from "./components/Header";
import First from "./components/First";
import Aboutme from "./components/Aboutme";
import Educations from "./components/Educations";
import "./css/app.css";

const App = () => {
  return (
    <>
      <div className="main-content">
        <Header />
        <First />
        <Aboutme />
        <Educations />
      </div>
    </>
  );
};

export default App;
