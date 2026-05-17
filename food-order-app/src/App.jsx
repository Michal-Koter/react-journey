import Header from "./components/Header.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Meals from "./components/Meals.jsx";
import {CartContextProvider} from "./store/cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
        <Header />
        <Meals/>
        <Checkout />
        <Cart />
    </CartContextProvider>
  );
}

export default App;
