import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Cart() {
  // Using useSelector instead of useStore to directly access state
  const items = useSelector((state: RootState) => state.products.list || []);
  console.log("eeeee: ", items);

  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </div>
  );
}

export default Cart;
