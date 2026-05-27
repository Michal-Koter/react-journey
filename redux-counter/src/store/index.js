import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        increase: (state, action) => {
            state.counter += action.payload;
        },
        toggleCounter: (state) => {
            state.showCounter = !state.showCounter;
        },
    }
})

const store = configureStore({
    // NOTE: option for many slices: reducer: {counter: counterSlice.reducer},
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

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

export default store;