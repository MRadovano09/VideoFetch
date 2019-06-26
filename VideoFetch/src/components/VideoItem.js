import React from "react";
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  // destrukturiramo da ne moramo pisati props.video svaki put
  // we write an anonymous function in onClick bcs if we just did a regulard callback, we wouldn't be able to call it with 'video' as the argument.
  //when we have to communicate from child to parent, we generally use callbacks.
  return (
    <div onClick={() => onVideoSelect(video)}  className="video-item item">
    <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
  );
};

//destructuring at work - instead of writing props.video.length, we put { videos } so we don't have to write props.videos.length

export default VideoItem;

// <div className="description">{video.snippet.description}</div>