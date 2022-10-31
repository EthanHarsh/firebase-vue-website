import React, { useState } from 'react';
import NavBar from "./components/NavBar/index";
import HomePage from "./pages/home"
import PortfolioPage from './pages/portfolio';
import AboutPage from './pages/about';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const mainStyle = {
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '100vw',
  height: '100vh'
}

function App() {

  return (
    <main style={mainStyle}>
      <NavBar />
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route exact path ="/contact">
          <HomePage />
        </Route>
      </Router>
    </main>
  );
}

export default App;
