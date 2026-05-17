export default function Meal({id, name, price, description, image}) {
    //TODO: handle add to cart with context
    return (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt=""/>
                <h3>{name}</h3>
                <section className="meal-item-actions">
                    <p className="meal-item-price">${price}</p>
                    <p className="meal-item-description">{description}</p>
                    <button className="button">Add to Cart</button>
                </section>
            </article>
        </div>
    );
}