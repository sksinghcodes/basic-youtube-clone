import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item">
            <img alt={video.snippet.title} className="thumbnail" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <p className="title">{video.snippet.title}</p>
            </div>
        </div>
    );
}

export default VideoItem;