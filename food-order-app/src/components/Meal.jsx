import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";

export default function Meal({id, name, price, description, image}) {
    const {addItem: addItemToCart} = useContext(CartContext);
    const localizedPrice = isNaN(price)
        ? price
        : Number(price).toLocaleString("en-US", {style: "currency", currency: "USD"});

    return (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt=""/>
                <h3>{name}</h3>
                <section className="meal-item-actions">
                    <p className="meal-item-price">{localizedPrice}</p>
                    <p className="meal-item-description">{description}</p>
                    <button className="button" onClick={() => addItemToCart({id, name, price})}>Add to Cart</button>
                </section>
            </article>
        </div>
    );
}