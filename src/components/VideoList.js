import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.videosList.map((video) => {
        return <VideoItem singleVideo={video} key={video.id.videoId} onVideoClick={props.onVideoClick}/>;
    });

    return (
        <div className="ui list">
            {renderedList}
        </div>
    );
}

export default VideoList;