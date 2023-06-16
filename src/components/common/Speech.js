import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        u.voice = synth.getVoices()[5];
        u.rate = 0.8;
        u.pitch = 1;
        u.volume = 0.8;
        u.lang = "vi-VN";
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

        setIsPaused(true);
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
