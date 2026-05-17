import Header from "./components/Header.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Meals from "./components/Meals.jsx";

function App() {
  return (
    <>
        <Header />
        <Meals/>
        <Checkout />
        <Cart />
    </>
  );
}

export default App;
