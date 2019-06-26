import React from "react";

// to avoid writing props.video for each use of props, we just destructure the props as { video }
// We have to place the conditional 'if there is no video', otherwise we get an error message when we first load the app as the props value that we passed here is 'null', so the app can't extract snippet.title from something that's 'null'. Therefore, we execute this conditional that checks if there's any selected videos to render



const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}` //we basically went to a YT video, clicked on 'embed', and took a look at the example of an embed link. Then we basically wrote this URL template that shows the general address for video embeds which we then also conjoined with our variable current videoId from the video object we receive on video search

  return (
    <div>
        <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
        </div>

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
