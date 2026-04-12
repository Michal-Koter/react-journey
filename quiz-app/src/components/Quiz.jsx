import {useState} from "react";
import QUESTIONS from "../questions.js";

const QUESTIONS_NUMBER = QUESTIONS.length;

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIdx = userAnswers.length;

    function handleUserAnswers(userAnswers) {
        setUserAnswers(prev => [...prev, userAnswers]);

    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIdx].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIdx].answers.map((answer, idx) => (
                        <li key={idx} className="answer">
                            <button onClick={() => handleUserAnswers(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
                <p id="question-overview">{`${activeQuestionIdx+1}/${QUESTIONS_NUMBER}`}</p>
                <progress className="answered" value={activeQuestionIdx} max={QUESTIONS_NUMBER}></progress>
            </div>
        </div>

    )
}