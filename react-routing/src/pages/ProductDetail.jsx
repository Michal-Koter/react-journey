import {Link, useParams} from "react-router-dom";

export default function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            {
                // Note: without 'relative' Link will navigate to the level above,
                // which is the root level in this case.
                // With 'relative="path"' it will navigate base on path rather than router.
            }
            <p><Link to=".." relative="path">Back</Link></p>
        </>
    );
}