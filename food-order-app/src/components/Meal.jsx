export default function Meal() {
    return (
        <div className="meal-item">
            <article>
                <img src="" alt=""/>
                <h3>Meal name</h3>
                <section className="meal-item-actions">
                    <p className="meal-item-price">$21.37</p>
                    <p className="meal-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="button">Add to Cart</button>
                </section>
            </article>
        </div>
    );
}