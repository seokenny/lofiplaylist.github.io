import React from 'react';
import './VideoItem.css';

const VideoDetails = (props) => {
    if(!props.selectedVideo){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

    return (
        <div>
            <div className="ui embed curved_border">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4>{props.selectedVideo.snippet.title}</h4>
                <p>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetails;