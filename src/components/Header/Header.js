import React, { useState } from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
function Header(){
    const [inputState, setInputState] = useState('');
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon />
                <Link to={`/`}>
                    <img
                        className='header__logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png' 
                        alt='YoutubeLogo'    
                    />                
                </Link>
            </div>
            <div className='header__input'>
                <input onChange={e => setInputState(e.target.value)} value={inputState} type='text' placeholder='Search' />
                <Link to={`/search/${inputState}`}>
                    <SearchIcon className='header__inputButton'/>
                </Link>
            </div>
            <div className='header__icons'>
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationIcon className='header__icon' />
                <a href='https://github.com/ReeKid2002' target='__blank'>
                    <Avatar 
                        src='https://avatars.githubusercontent.com/u/69151829?v=4'
                        alt='Rahul Behera'
                    />
                </a>
            </div>
        </div>
    );
}

export default Header;