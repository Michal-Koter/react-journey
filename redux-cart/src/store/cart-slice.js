import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui-slice";

const cartSlice = createSlice({
    name: "cart"
    , initialState: {
        items: []
        , totalQuantity: 0
    }
    , reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        }
        , addItemToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: item.id
                    , price: item.price
                    , quantity: 1
                    , totalPrice: item.price
                    , name: item.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            }
        }
        , removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(i => i.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(i => i.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
});

export const sendCartDate = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending"
            , title: "Sending..."
            , message: "Sending cart data!"
        }));

        const sendRequest = async () => {
            const response = await fetch("https://firebasedatabase.app/cart.json", { // require complete URL with your own firebase database
                method: "PUT"
                , body: JSON.stringify(cartData)
            });

            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: "success"
                , title: "Success"
                , message: "Sent cart data successfully!"
            }));
        } catch (ignoredError) {
            dispatch(uiActions.showNotification({
                status: "error"
                , title: "Error!"
                , message: "Sending cart data failed!"
            }));
        }
    };
}

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
