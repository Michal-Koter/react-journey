import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

const DATA_URL = "https://firebasedatabase.app/cart.json"

export const sendCartDate = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending"
            , title: "Sending..."
            , message: "Sending cart data!"
        }));

        const sendRequest = async () => {
            const response = await fetch(DATA_URL, { // require complete URL with your own firebase database
                method: "PUT"
                , body: JSON.stringify({
                    items: cartData.items
                    , totalQuantity: cartData.totalQuantity
                })
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

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(DATA_URL);

            if (!response.ok) {
                throw new Error("Fetch cart data failed.");
            }

            return await response.json();
        }


        try {
            const fetchedCart = await fetchData();
            dispatch(cartActions.replaceCart({
                items: fetchedCart.items || []
                , totalQuantity: fetchedCart.totalQuantity
            }))
        } catch (ignoredError) {
            dispatch(uiActions.showNotification({
                status: "error"
                , title: "Error!"
                , message: "Fetching cart data failed!"
            }))
        }
    }
}