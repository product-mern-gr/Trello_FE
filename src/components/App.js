import React from "react";
import LoginPage from "../page/LoginPage/LoginPage";
import MenuPage from "../page/MenuPage/MenuPage";
import MainPage from "../page/MainPage/MainPage";
import RegistrationPage from "../page/RegistrationPage/RegistrationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Development from "../page/Development/Development";


function App() {
  return (
    <div className="Page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route  path="/menu/:slug" element={<MainPage />}/>
          {/* <Route  path="/main/:slug" element={<MainPage />} /> */}
          <Route  path="/menu" element={<MenuPage />} />
          <Route  path="/not-found" element={<Development />} />
          
        </Routes>
        
      </BrowserRouter>


    </div>
  );
}

export default App;
