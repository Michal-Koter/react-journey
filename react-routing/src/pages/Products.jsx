import {Link} from "react-router-dom";

const DUMMY_PRODUCTS = [
    {id: "p1", name: "Product 1"}
    , {id: "p2", name: "Product 2"}
    , {id: "p3", name: "Product 3"}
]

export default function ProductsPage() {
    return (
        <>
            <h1>The products page.</h1>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={product.id} relative="">{product.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}