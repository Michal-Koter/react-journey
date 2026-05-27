import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
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

const authSlice = createSlice({
    name: "auth",
    initialState: {isAuthenticated: false},
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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