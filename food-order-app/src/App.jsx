import Header from "./components/Header.jsx";
import Meal from "./components/Meal.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <>
        <Header />
        <div id="meals">
            <Meal/>
            <Meal/>
            <Meal/>
        </div>
        <Checkout />
        <Cart />
    </>
  );
}

export default App;
