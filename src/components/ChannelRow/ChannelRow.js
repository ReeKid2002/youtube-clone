import React from 'react';
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ChannelRow.css'
function ChannelRow({image, channel, verified, subsriptions, noOfVideos, description}){
    return (
        <div className='channelRow'>
            <Avatar src={image} alt={channel} className='channelRow__logo' />
            <div className='channelRow__text'>
                <h4>{channel} {verified && <CheckCircleIcon /> }</h4>
                <p>{subsriptions} subscrbers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default ChannelRow;