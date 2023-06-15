import Speech from "react-speech";
import React from "react";
const SpeechNews = ({news}) => {
    return (
        // create button play
            <Speech
                    text={news}
                    displayText="Play"
                    textAsButton={true}
                    displayTextAsButton={true}
                    stop={true}
                    resume={true}
                    pause={true}
                    pitch="1"
                    rate="0.8"
                    volume="0.8"
                    lang="vi-VN"
            />
        // create speech
    );
}
export default SpeechNews;