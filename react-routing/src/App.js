import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// Note: older way of creating routes
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage/>}/>
//         <Route path="/products" element={<ProductsPage/>}/>
//     </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
    {
        path: "/"
        , element: <RootLayout/>
        , errorElement: <ErrorPage/>
        , children: [
            {path: "/", element: <HomePage/>}
            , {path: "/products", element: <ProductsPage/>}
            , {path: "/products/:productId", element: <ProductDetailPage/>}
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App;
