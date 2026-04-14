import {useState} from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";
import QUESTIONS from "../questions.js";

const SET_ANSWER_TIMEOUT = 2000
    , SELECT_ANSWER_TIMEOUT = 1000
    , DEFAULT_TIMEOUT = 10000;

export default function Question({idx, onSelectAnswer, onSkipAnswer}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    });

    let timer = DEFAULT_TIMEOUT;

    if (answer.selectedAnswer) {
        timer = SELECT_ANSWER_TIMEOUT;
    }
    if (answer.isCorrect !== null) {
        timer = SET_ANSWER_TIMEOUT;
    }

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
            }, SET_ANSWER_TIMEOUT);
        }, SELECT_ANSWER_TIMEOUT);
    }

    let answerState = "";

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div id="question">
            <h2>{QUESTIONS[idx].text}</h2>
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
                mode={answerState}
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