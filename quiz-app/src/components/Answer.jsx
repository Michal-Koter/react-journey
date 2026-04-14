import {useRef} from "react";

export default function Answer({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {answers.map((answer, idx) => {
                const isSelected = selectedAnswer === answer;
                let cssClasses = "";

                if (isSelected) {
                    if (answerState === "answer") {
                        cssClasses = "selected";
                    } else if ((answerState === "correct" || answerState === "wrong")) {
                        cssClasses = answerState;
                    }
                }
                return <li key={idx} className="answer">
                    <button
                        onClick={() => onSelect(answer)}
                        className={cssClasses}
                        disabled={answerState !== ""}
                    >{answer}</button>
                </li>
            })}
        </ul>
    )
}