import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    return (

        <div className="item" onClick={() => props.onVideoClick(props.singleVideo)}>
            <div className="content">
                <img src={props.singleVideo.snippet.thumbnails.medium.url} className="curved_border_icon sm_thumb_image"/>
                <div className="vid_descript">
                    <a className="header">{props.singleVideo.snippet.title}</a>
                    <div className="description">{props.singleVideo.snippet.description}</div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;