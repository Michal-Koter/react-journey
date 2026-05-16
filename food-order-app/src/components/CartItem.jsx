export default function CartItem() {
    return (
        <li className="cart-item">
            <p>Item name</p>
            <section className="cart-item-actions">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </section>
        </li>
    )
}