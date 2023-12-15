import React from "react";
import './AppBar.scss'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/R.png'
import { AiOutlineDown,AiOutlineUser,AiFillBell } from "react-icons/ai";
import { BsDoorOpen, BsSearch } from "react-icons/bs";

import Button from "../Button/Button";


function AppBar() {

  const slug = '/menu/';
  const navigation = useNavigate();

  const renderMainPage = () => {
      navigation(slug)
  }

  const styleIcon = { color: "white", fontSize: "15px", marginLeft: "5px" }
  const styleSearch = { color: "white", fontSize: "15px", marginRight: "5px" }
  const styleNo = { color: "white", fontSize: "16px" }

  return (
    <nav className='navbar-app'>
      <div className="navbar__left">
        <div className="navbar__left-logo" onClick={renderMainPage}>
          <img src={logo} alt="trello" />
        </div>

        <div className="navbar__left-nav">
          <li className="navbar__left-nav-item">
            <p>Workspace</p>
            <AiOutlineDown style={styleIcon} />
          </li>

          <li className="navbar__left-nav-item">
            <p>Recent</p>
            <AiOutlineDown style={styleIcon} />
          </li>

          <li className="navbar__left-nav-item">
            <p>Strarred</p>
            <AiOutlineDown style={styleIcon} />
          </li>

          <li className="navbar__left-nav-item">
            <p>Templates</p>
            <AiOutlineDown style={styleIcon} />
          </li>
        </div>


        <div className="navbar__left-button" onClick={renderMainPage}>
          <Button text="Back to menu" type="transparentMain" icon="" />
        </div>
      </div>

      <div className="navbar__right">
        <div className="navbar__right-search">
          <div className="navbar__right-search-wrap">
            <BsSearch className="icon-search" style={styleSearch} />
           Search
          </div>
        </div>

        <div className="navbar__right-nofi">
          <AiFillBell style={styleNo} />
        </div>

        <div className="navbar__right-nofi mr-5">
          <AiOutlineUser style={styleNo} />
        </div>

        <Button text="logout" icon=<BsDoorOpen /> slug='/'/>


      </div>
    </nav>
  )
}

export default AppBar