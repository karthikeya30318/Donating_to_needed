// src/App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import DonationPage from './components/DonationPage';
import Listpage from './components/Listpage';
import ProductPage from './components/ProductPage';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main Page Route */}
        <Route path="/Home" element={<Home/>} /> 
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Listpage.js" element={<Listpage/>}/>
        <Route path="/DonationPage" element={<DonationPage/>} />
        <Route path="/ProductPage" element={<ProductPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}
