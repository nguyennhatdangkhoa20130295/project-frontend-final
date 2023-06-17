// nhúng video vào trang home
import ReactPlayer from "react-player";

const VideoPlayer = ({source, poster}) => {
    return (
        <ReactPlayer width="320" height="240" controls
                     url={source}
                     poster={poster}>
            <a href={source} title="Play">Play</a>
        </ReactPlayer>

    )
}
export default VideoPlayer;