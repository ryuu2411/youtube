import VideoCard from './VideoCard';

const VideoList = () => {
  const videos = [
    { id: 1, title: '鬼滅の刃', thumbnail: '/assets/common/kimetu-thumbnail.jfif' },
    { id: 2, title: '呪術廻戦', thumbnail: '/assets/common/thumbnail2.jpg' },
    { id: 3, title: '僕のヒーローアカデミア', thumbnail: '/assets/common/thumbnail3.jpg' },
  ];

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard key={video.id} title={video.title} thumbnail={video.thumbnail} />
      ))}
    </div>
  );
};

export default VideoList;
