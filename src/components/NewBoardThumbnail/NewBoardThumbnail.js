import React from 'react';
import './NewBoardThumbnail.scss'
import { useNavigate } from 'react-router';

function NewBoardThumbnail({
    board = {title : "ninh"}
}) {


    const slug = '/menu/'+board.title;
    const navigation = useNavigate();

    const renderMainPage = () => {
        navigation(slug)
    }

    return (
        <div className='NewBoardThumbnail' onClick={renderMainPage}>
            <p>Create new board</p>
        </div>
    );
}

export default NewBoardThumbnail;