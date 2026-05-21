import {useActionState, useContext} from "react";

import Modal from "./Modal.jsx";
import Input from "./Input.jsx";
import {isValidEmail, isValidName, isValidStreet, isValidPostalCode, isValidCity, isNotEmpty} from "../utils/validation.js";
import {CartContext} from "../store/cart-context.jsx";

async function submitOrder(body) {
    const res = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify({order: body}),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data.message
}

export default function Checkout({open, onClose, amount}) {
    const {items} = useContext(CartContext);

    function checkoutAction(prevFormState, formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const street = formData.get('street');
        const postalCode = formData.get('postal-code');
        const city = formData.get('city');

        let errors = [];

        if (!isNotEmpty(name)) {
            errors.push("Name is required");
        } else if (!isValidName(name)) {
            errors.push("Name must contain only letters, spaces, hyphens or apostrophes (min. 2 characters)");
        }

        if (!isNotEmpty(email)) {
            errors.push("Email is required");
        } else if (!isValidEmail(email)) {
            errors.push("Please enter a valid email address");
        }

        if (!isNotEmpty(street)) {
            errors.push("Street is required");
        } else if (!isValidStreet(street)) {
            errors.push("Street must be at least 3 characters long");
        }

        if (!isNotEmpty(postalCode)) {
            errors.push("Postal Code is required");
        } else if (!isValidPostalCode(postalCode)) {
            errors.push("Postal Code must contain at least 3 characters (numbers, spaces or hyphens)");
        }

        if (!isNotEmpty(city)) {
            errors.push("City is required");
        } else if (!isValidCity(city)) {
            errors.push("City must contain only letters, spaces, hyphens or apostrophes (min. 2 characters)");
        }

        if (errors.length > 0) {
            return {
                errors: errors,
                enteredValues: {
                    name,
                    email,
                    street,
                    postalCode,
                    city,
                }
            };
        }

        try {
            submitOrder({
                customer: {
                    name,
                    email,
                    street,
                    'postal-code': postalCode,
                    city,
                },
                items,
            });
        } catch (error) {
            //TODO: display error message in UI
        }

        return {errors: null};
    }

    const [formState, formAction, pending] = useActionState(checkoutAction, {errors: null});

    return (
        <Modal open={open} onClose={onClose}>
            <form action={formAction}>
                <h2>Checkout</h2>
                <p>Total amount: {amount}</p>

                {formState.errors && (
                    <div className="validation-error">
                        <ul>
                            {formState.errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <Input type="text" id="name" label="Full name" defaultValue={formState.enteredValues?.name}/>
                <Input type="email" id="email" label="Email" defaultValue={formState.enteredValues?.email}/>
                <Input type="text" id="street" label="Street" defaultValue={formState.enteredValues?.street}/>
                <div className="control-row">
                    <Input type="text" id="postal-code" label="Postal Code" defaultValue={formState.enteredValues?.postalCode}/>
                    <Input type="text" id="city" label="City" defaultValue={formState.enteredValues?.city}/>
                </div>
                <p className="modal-actions">
                    <button type="button" className="button text-button" onClick={onClose}>Close</button>
                    <button type="submit" className="button">Submit Order</button>
                </p>
            </form>
        </Modal>
    )
}