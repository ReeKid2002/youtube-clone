import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './SideBar.css';
function SideBar() {
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Home' />
            <SideBarRow Icon={WhatshotIcon} title='Trending' />
            <SideBarRow Icon={SubscriptionIcon} title='Subscription' />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title='Library' />
            <SideBarRow Icon={HistoryIcon} title='Histroy' />
            <SideBarRow Icon={OndemandVideoIcon} title='Your Video' />
            <SideBarRow Icon={WatchLaterIcon} title='Watch Later' />
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title='Liked Video' />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title='Show More' />
            <hr />
        </div>
    );
}

export default SideBar;