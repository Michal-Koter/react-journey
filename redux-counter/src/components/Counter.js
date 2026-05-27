import {useDispatch, useSelector} from 'react-redux';

import {counterActions} from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }
    const increaseHandler = (amount) => {
        dispatch(counterActions.increase(amount));
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={() => increaseHandler(5)}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//             }
//         case "INCREASE":
//             return {
//                 ...state,
//                 counter: state.counter + action.amount,
//             }
//         case "DECREMENT":
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//             }
//         case "TOGGLE_COUNTER":
//             return {
//                 ...state,
//                 showCounter: !state.showCounter,
//             }
//         default:
//             return state;
//     }
// }
// const store = createStore(counterReducer);

export default Counter;
