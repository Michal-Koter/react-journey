import {forwardRef, useImperativeHandle, useRef} from "react";
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
export default function ResultModal({ref, result, targetTime}) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}