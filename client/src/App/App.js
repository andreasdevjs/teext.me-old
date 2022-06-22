// Basic
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Username from './Pages/Username/Username';
import FAQ from './Pages/FAQ/FAQ';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import Account from './Pages/Account/Account';

// Components
import Menu from './Components/Menu/Menu';

// Fonts
import './Assets/Fonts/Gilroy/Gilroy-Regular.otf';
import './Assets/Fonts/Gilroy/Gilroy-Semibold.otf';

// Base CSS
import './App.css';

// Main App
function App() {
  return (
    <React.Fragment>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/account" element={<Account />} /> 
          <Route path="/:username" element={<Username />} /> 
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
