import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";

export default function CartItem({id, name, quantity}) {
    const {addItem, removeItem} = useContext(CartContext);

    return (
        <li className="cart-item">
            <p>{name}</p>
            <section className="cart-item-actions">
                <button onClick={() => removeItem(id)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => addItem({id})}>+</button>
            </section>
        </li>
    )
}