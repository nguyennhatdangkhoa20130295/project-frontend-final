// nhúng video vào trang home
const VideoPlayer = ({source, poster}) => {
    return (
        <video width="320" height="240" controls
            src={source}
            poster={poster}>
            <a href={source} title="Play">Play</a>
        </video>

    )
}
export default VideoPlayer;