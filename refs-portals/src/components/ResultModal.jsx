import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom"
/**
 * NOTE: this is method to forward ref in React version < 19
 */
/*
 const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
     return (
         <dialog ref={ref} className="result-modal">
             <h2>You {result}</h2>
             <p>The target time was <strong>{targetTime} seconds.</strong></p>
             <p>You stopped the timer with <strong>X seconds left.</strong></p>
             <form method="dialog">
                 <button>Close</button>
             </form>
         </dialog>
     )
 });

 export default ResultModal;
 */


/**
 *  NOTE: this is a newer way to forward ref in React >= 19
 */
export default function ResultModal({ref, targetTime, remainingTime, onReset}) {
    const dialog = useRef();

    const userLost = remainingTime <= 0
        , formattedRemainingTime = (remainingTime / 1000).toFixed(2)
        , score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("model")
    )
}