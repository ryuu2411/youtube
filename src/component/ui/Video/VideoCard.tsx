interface Props {
  title: string;
  thumbnail: string;
}

const VideoCard = (props: Props) => {
  return (
    <div className="video-card">
      <img src={props.thumbnail} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
};

export default VideoCard;
