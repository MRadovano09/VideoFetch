import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect}) => {

    const renderedList = videos.map((video) => { 
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>  //basically we MAP the received 'videos' props and say that for each element, a render of 'videoItem' should be executed
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;