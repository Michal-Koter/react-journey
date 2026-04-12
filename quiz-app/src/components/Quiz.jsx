import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const QUESTIONS_NUMBER = QUESTIONS.length;

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIdx = userAnswers.length;

    const handleUserAnswers = useCallback((userAnswers) => {
        setUserAnswers(prev => [...prev, userAnswers]);
    }, []);

    const handleTimeoutExpired = useCallback(() => handleUserAnswers(null), [handleUserAnswers]);

    let content;
    if (QUESTIONS_NUMBER > activeQuestionIdx) {
        const activeQuestion = QUESTIONS[activeQuestionIdx]
            , correctAnswer = activeQuestion.answers[0]
            , shuffledAnswers = [...activeQuestion.answers].sort((a, b) => Math.random() - 0.5);

        content = (
            <div id="question">
                <h2>{activeQuestion.text}</h2>
                <QuestionTimer
                    key={activeQuestionIdx}
                    timeout={10000}
                    onTimeout={handleTimeoutExpired}
                />
                <ul id="answers">
                    {shuffledAnswers.map((answer, idx) => (
                        <li key={idx} className="answer">
                            <button onClick={() => handleUserAnswers(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
                <p id="question-overview">{`${activeQuestionIdx + 1}/${QUESTIONS_NUMBER}`}</p>
                <progress className="answered" value={activeQuestionIdx} max={QUESTIONS_NUMBER}></progress>
            </div>
        )
    } else {
        content = (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon"/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }

    return (
        <div id="quiz">
            {content}
        </div>

    )
}