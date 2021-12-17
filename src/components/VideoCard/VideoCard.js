import React from "react";
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
function VideoCard(props) {
    return (
        <div className="videoCard">
            <img src={props.image} alt="thumbnail" className="videoCard__thumbnail"/>
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" src={props.channelImage} alt="Avatar"/>
                <div className="videoCard__text">
                    <h4>{props.title}</h4>
                    <p>{props.channel}</p>
                    <p>
                        {props.views} • {props.timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;