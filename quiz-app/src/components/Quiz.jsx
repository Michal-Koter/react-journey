import {useCallback, useState} from "react";
import Question from "./Question.jsx";
import QUESTIONS from "../questions.js";
import Summery from "./Summery.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIdx = userAnswers.length;
    const quizIsComplete = activeQuestionIdx === QUESTIONS.length;

    const handleUserAnswers = useCallback((userAnswer) => {
        setUserAnswers(prev => [...prev, userAnswer]);
    }, []);

    const handleTimeoutExpired = useCallback(() => handleUserAnswers(null), [handleUserAnswers]);

    return (
        <div id="quiz">
            {!quizIsComplete
                ? <Question
                    key={activeQuestionIdx}
                    idx={activeQuestionIdx}
                    selectedAnswer={userAnswers[userAnswers.length - 1]}
                    onSelectAnswer={handleUserAnswers}
                    onSkipAnswer={handleTimeoutExpired}
                />
                : <Summery userAnswers={userAnswers} />
            }
        </div>
    )
}