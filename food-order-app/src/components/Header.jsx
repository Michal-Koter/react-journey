import logo from '../assets/logo.jpg'
import {useContext, useState} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";

export default function Header() {
    const [isCartOpen, setCatOpen] = useState(false);
    const [isCheckoutOpen, setCheckoutOpen] = useState(false);
    const {items} = useContext(CartContext);
    const itemsCount = items.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0)
        .toLocaleString("en-US", {style: "currency", currency: "USD"});

    function handleCartButtonClick() {
        setCatOpen(true);
    }

    function handleCartClose() {
        setCatOpen(false);
    }

    function handleGoToCheckout() {
        setCatOpen(false);
        setCheckoutOpen(true);
    }

    function handleCheckoutClose() {
        setCheckoutOpen(false);
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo"/>
                <h1>Reactfood</h1>
            </div>
            <button className="text-button" onClick={handleCartButtonClick}>Cart ({itemsCount})</button>
            <Cart open={isCartOpen} onClose={handleCartClose} onGoToCheckout={handleGoToCheckout} amount={totalAmount}/>
            <Checkout open={isCheckoutOpen} onClose={handleCheckoutClose} amount={totalAmount}/>
        </header>
    );
}