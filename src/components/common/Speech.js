import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance();
        const parser = new DOMParser();
        const parsedText = parser.parseFromString(text, "text/html").body.textContent;

        u.text = parsedText;

        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        }

        synth.speak(utterance);

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    return (
        <div>
            <button onClick={handlePlay}>
                <i className="fa fa-play"></i>
            </button>
            <button onClick={handlePause}>
                <i className="fa fa-pause"></i>
            </button>
            <button onClick={handleStop}>
                <i className="fa fa-stop"></i>
            </button>
        </div>
    );
};

export default TextToSpeech;
