
import React from "react";
import Speech from "react-speech";
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
                    voice = "Google tiếng Việt"
                    lang="vi-VN"
            />
        //
    );
}

export default SpeechNews;