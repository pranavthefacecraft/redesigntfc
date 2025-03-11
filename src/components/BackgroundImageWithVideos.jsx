import React from 'react';
import './BackgroundImageWithVideos.css';

const BackgroundImageWithVideos = ({ backgroundImage, videos }) => {
  return (
    <div className="background-image-with-videos" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {videos.map((video, index) => (
        <video key={index} src={video} autoPlay muted loop className="video-element" />
      ))}
    </div>
  );
};

export default BackgroundImageWithVideos;