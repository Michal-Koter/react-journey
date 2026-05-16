import CartItem from "./CartItem.jsx";
import Modal from "./Modal.jsx";

export default function Cart() {
    return (
        <Modal open={false} onClose={() => {}}>
            <div className="cart" >
                <h2>Cart</h2>
                <ul>
                    <CartItem/>
                    <CartItem/>
                </ul>
                <section className="cart-total">21.37</section>
                <section className="modal-actions">
                    <button className="text-button">Close</button>
                    <button className="button">Go to Checkout</button>
                </section>
            </div>
        </Modal>
    );
}