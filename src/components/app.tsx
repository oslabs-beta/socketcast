import React from "react";
import "./app.scss";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app_container">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
