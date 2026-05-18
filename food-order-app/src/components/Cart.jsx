import CartItem from "./CartItem.jsx";
import Modal from "./Modal.jsx";
import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";

export default function Cart({open, onClose, onGoToCheckout}) {
    const {items} = useContext(CartContext);

    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Modal open={open} onClose={onClose}>
            <div className="cart" >
                <h2>Cart</h2>
                <ul>
                    {items && items.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                </ul>
                <section className="cart-total">{totalAmount}</section>
                <section className="modal-actions">
                    <button className="text-button" onClick={onClose}>Close</button>
                    <button className="button" onClick={onGoToCheckout}>Go to Checkout</button>
                </section>
            </div>
        </Modal>
    );
}