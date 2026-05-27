import {createStore} from "redux";

const counterReducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            }
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + action.amount,
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;