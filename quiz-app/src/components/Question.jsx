import {useState} from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";
import QUESTIONS from "../questions.js";


export default function Question({idx, onSelectAnswer, onSkipAnswer}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(()=> {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[idx].answers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = "";

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answer";
    }

    return (
        <div id="question">
            <h2>{QUESTIONS[idx].text}</h2>
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer}
            />
            <Answer
                answers={QUESTIONS[idx].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}