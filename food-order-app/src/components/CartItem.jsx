export default function CartItem({id, name, quantity}) {
    return (
        <li className="cart-item">
            <p>{name}</p>
            <section className="cart-item-actions">
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>
            </section>
        </li>
    )
}