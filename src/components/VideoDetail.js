import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="player-wrapper">
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            <div className="video-detail">
                <h4 className="title">{video.snippet.title}</h4>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;