import React from "react";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import TuneIcon from '@mui/icons-material/Tune';
import './SearchPage.css';
function SearchPage(){
    return(
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image='https://source.unsplash.com/1200x530/?youtube'
                channel='Good Random Morning'
                verified
                subsriptions='17.3M'
                noOfVideos={2805}
                description='Welcome to Good Random Morning with JoJo!'
            />
            <hr />
            <div className="searchPage__videorow">
                <VideoRow 
                    channel='Good Random Morning'
                    title='Crazy Free Knowledge On Gaming!'
                    image='https://source.unsplash.com/1200x530/?gaming'
                    subscriptions='17.3M'
                    description={`Today, we're guessing whether these crazy Craigslist items were paid for or free!`}
                    views='702K'
                    timestamp='17:00'
                />  
                <VideoRow 
                    channel='Good Random Morning'
                    title='Crazy Free Knowledge On Gaming!'
                    image='https://source.unsplash.com/1200x530/?gaming'
                    subscriptions='17.3M'
                    description={`Today, we're guessing whether these crazy Craigslist items were paid for or free!`}
                    views='702K'
                    timestamp='17:00'
                />  
                <VideoRow 
                    channel='Good Random Morning'
                    title='Crazy Free Knowledge On Gaming!'
                    image='https://source.unsplash.com/1200x530/?gaming'
                    subscriptions='17.3M'
                    description={`Today, we're guessing whether these crazy Craigslist items were paid for or free!`}
                    views='702K'
                    timestamp='17:00'
                />  
                <VideoRow 
                    channel='Good Random Morning'
                    title='Crazy Free Knowledge On Gaming!'
                    image='https://source.unsplash.com/1200x530/?gaming'
                    subscriptions='17.3M'
                    description={`Today, we're guessing whether these crazy Craigslist items were paid for or free!`}
                    views='702K'
                    timestamp='17:00'
                />  
            </div>
        </div>
    )
}

export default SearchPage;