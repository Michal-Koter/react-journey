import {createContext, useReducer} from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (itemId) => {},
});

function cartReducer(state, action) {
    const updatedItems = [...state.items];

    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = updatedItems.findIndex(
                (item) => item.id === action.item.id
            );
            if (existingItemIndex > -1) {
                const existingItem = updatedItems[existingItemIndex];
                updatedItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                };
            } else {
                updatedItems.push({...action.item, quantity: 1});
            }
            return {
                ...state,
                items: updatedItems,
            }
        case 'REMOVE_ITEM':
            const removedItemIndex = updatedItems.findIndex(
                (item) => item.id === action.itemId
            );
            if (removedItemIndex > -1) {
                const removeItem = {
                    ...updatedItems[removedItemIndex]
                }
                removeItem.quantity = removeItem.quantity - 1;

                if (removeItem.quantity <= 0) {
                    updatedItems.splice(removedItemIndex, 1);
                } else {
                    updatedItems[removedItemIndex] = removeItem;
                }
            }
            return {
                ...state,
                items: updatedItems,
            }
        default:
            return state;
    }
}

export function CartContextProvider({ children }) {
    const [cartState, cartDispatch] = useReducer(cartReducer, {items: []});

    function handleAddItem(item) {
        cartDispatch({
            type: 'ADD_ITEM',
            item
        });
    }

    function handleRemoveItem(itemId) {
        cartDispatch({
            type: 'REMOVE_ITEM',
            itemId
        });
    }

    const contextValue = {
        items: cartState.items,
        addItem: handleAddItem,
        removeItem: handleRemoveItem
    }

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
