import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summery({userAnswers}) {

    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, idx) => answer === QUESTIONS[idx].answers[0]
    );

    const skippedShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );
    const correctShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );
    const incorrectShare = 100 - skippedShare - correctShare

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{incorrectShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, idx) => {
                    let cssClasses = "user-answer";
                    if (answer === null) {
                        cssClasses += " skipped";
                    } else if (answer === QUESTIONS[idx].answers[0]) {
                        cssClasses += " correct";
                    } else {
                        cssClasses += " wrong";
                    }

                    return (
                        <li key={idx}>
                            <h3>{idx + 1}</h3>
                            <p className="question">{QUESTIONS[idx].text}</p>
                            <p className={cssClasses}>{answer ?? "Skipped"}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}