import ReactPlayer from 'react-player';

interface YoutubeVideoProps {
  title?: string;
  url: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  return <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing={true} muted={true} width="100%" height="60rem" />;
}
