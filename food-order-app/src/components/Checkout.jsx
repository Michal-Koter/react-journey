import Modal from "./Modal.jsx";
import Input from "./Input.jsx";

export default function Checkout() {
    return (
        <Modal open={false} onClose={() => {}}>
            <form action={null}>
                <h2>Checkout</h2>
                <p>Total amount: $21.37</p>
                <Input type="text" id="name" label="Full name"/>
                <Input type="email" id="email" label="Email"/>
                <Input type="text" id="street" label="Street"/>
                <div className="control-row">
                    <Input type="text" id="postal-code" label="Postal Code"/>
                    <Input type="text" id="city" label="City"/>
                </div>
                <p className="modal-actions">
                    <button className="button text-button">Close</button>
                    <button className="button">Submit Order</button>
                </p>
            </form>
        </Modal>
    )
}