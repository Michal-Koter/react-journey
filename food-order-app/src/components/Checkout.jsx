import Modal from "./Modal.jsx";
import Input from "./Input.jsx";

export default function Checkout({open, onClose, amount}) {
    return (
        <Modal open={open} onClose={onClose}>
            <form action={null}>
                <h2>Checkout</h2>
                <p>Total amount: {amount}</p>
                <Input type="text" id="name" label="Full name"/>
                <Input type="email" id="email" label="Email"/>
                <Input type="text" id="street" label="Street"/>
                <div className="control-row">
                    <Input type="text" id="postal-code" label="Postal Code"/>
                    <Input type="text" id="city" label="City"/>
                </div>
                <p className="modal-actions">
                    <button type="button" className="button text-button" onClick={onClose}>Close</button>
                    <button type="submit" className="button">Submit Order</button>
                </p>
            </form>
        </Modal>
    )
}