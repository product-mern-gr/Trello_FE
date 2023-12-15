import React from 'react';
import './Button.scss'
import { BsFillMenuButtonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Button({
    className="",
    text="button",
    icon =<BsFillMenuButtonFill />,
    type ="",
    slug ="/not-found"
}) {

    const navigation = useNavigate();

    const renderMainPage = () => {
        navigation(slug)
    }

    return (
        <button className={`button ${type} ${className}`} onClick={renderMainPage} >
            {icon !== '' &&  <div className='icon'>{icon}</div>}
            {text !== '' &&  <div className='text'>{text}</div>}
        </button>
    );
}

export default Button;