import React from 'react';
import './app.scss';
import Header from './Header'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'


const App = () => {

  return (
    <div className="app">
      <h1>React App!!!</h1>
      <MainContainer/>
      <Header />
      <Sidebar />
  
    </div>
  );
}

export default App;