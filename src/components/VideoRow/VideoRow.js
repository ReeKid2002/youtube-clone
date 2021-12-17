import React from "react";
import './VideoRow.css'
function VideoRow({channel, title, image, subscriptions, description, views, timestamp}){
    return (
        <div className="videoRow">
            <img src={image} alt={channel} className="videoRow__image" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{channel} • <span className="videoRow__subs"><span className="videoRow__subNumber">{subscriptions}</span> Subscribers</span> • {views} Views • {timestamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    );
}

export default VideoRow;
