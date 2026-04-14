import {useEffect, useState} from "react";

const INTERVAL_TIME = 10;

export default function QuestionTimer({timeout, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => clearTimeout(timer);
    }, [timeout, onTimeout]);


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prev => prev - INTERVAL_TIME)
        }, INTERVAL_TIME)

        return () => {clearInterval(interval)}
    }, []);


    return <progress id="question-time" value={remainingTime} max={timeout} className={mode}/>
}