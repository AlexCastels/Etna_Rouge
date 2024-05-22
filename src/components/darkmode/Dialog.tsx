import React, { useEffect, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import "./dialog.scss"

const Dialog:React.FC<boolean> = ({active}) => {
    const { mode, setMode } = useDarkMode();
    const [closing, setClosing] = useState(false);
    const [closed, setClosed] = useState(true);

    const handleDarkClick = () => {
        setMode(`${mode === "light" ? "dark" : "light"}`);
    };

    const handleCloseClick = () => {
        setClosing(true);
    }

    useEffect(() => {
        if (closing) {
            setTimeout(() => {
                setClosing(false);
                setClosed(true);
            }, 300); // Tempo in millisecondi, puoi regolarlo in base alle tue esigenze
        } else {
            setClosed(false);
        }
    }, [closing]);

    useEffect(() => {
        if (active && closed) {
            setClosing(false);
            setClosed(false);
        }
    }, [active, closed]);

    useEffect(() => {
        document.body.classList.add(mode);
    }, [mode]);

    if (!active && closed) {
        return null; 
    }

    return (
        <dialog className={`dialog-darkmode ${closing ? 'closing' : ''}`} open={!closing && active}>
            <h3>Dark mode/Light mode</h3>
            <button onClick={handleDarkClick}>Switch</button>
            <button onClick={handleCloseClick}> X </button>
        </dialog>
    );
};

export default Dialog;
