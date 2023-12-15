import React from 'react';
import './BoardThumbnail.scss'
import { useNavigate } from 'react-router';

function BoardThumbnail({
    board = {title : "ninh"}
}) {


    const slug = '/menu/'+board.title;
    const navigation = useNavigate();

    const renderMainPage = () => {
        navigation(slug)
    }

    return (
        <div className='BoardThumbnail' onClick={renderMainPage}>
            <h3 className='BoardThumbnail__title'>
                    GPT3 Project
            </h3>

            <div className='BoardThumbnail__img'>
            <img src="https://i.ytimg.com/vi/5L8dImESnl0/maxresdefault.jpg" alt="trello avatar" />
            </div>
        </div>
    );
}

export default BoardThumbnail;