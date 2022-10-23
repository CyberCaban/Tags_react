import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0)
    const [Timer, setTimer] = useState(false)
    const [Caption, setCaption] = useState('Start')

    function addone() {
        let temp = seconds
        setSeconds(temp+=1)
        {Timer ? setTimer(false) : setTimer(true)}
        {Timer ? setCaption("Start") : setCaption("Stop")}
    }

    function clear() {
        setTimer(false)
        setSeconds(0)
        setCaption("Start")
    }

    useEffect(() => {
        if (Timer) {
            let temp = seconds
            const interval = setInterval(() => {
                setSeconds(temp+=1)
            }, 100);
            return () => clearInterval(interval);
        }
    }, [Timer]);

    return <div className="timer" title="Timer">
        <h3>Timer</h3>
        <p><span>{Math.floor(seconds / 60)}</span>:<span>{seconds % 60}</span></p>
        <button className="button-30" onClick={addone}>{Caption}</button>
        <button className="button-30" onClick={clear}>Clear</button>
    </div>
}

export default Timer