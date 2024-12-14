import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Cart />
        ddddd
      </Provider>
    </>
  );
}

export default App;
