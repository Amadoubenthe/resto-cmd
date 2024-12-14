import { useDispatch, useSelector } from "react-redux";
import { addProduct, RootState } from "../../store";
import { useEffect, useState } from "react";

function Cart() {
  const storeList = useSelector((state: RootState) => state.products.list);
  const [list, setList] = useState(storeList);
  const [amount, setAmount] = useState(
    storeList
      .map((p) => p.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setList(storeList);
    setAmount(
      storeList
        .map((p) => p.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    );
  }, [storeList]);

  const text: string = "Aucun produit sélectionné pour le moment";

  return (
    <div>
      {list.length > 0 ? (
        <p>Le montant total est: {amount} EURO</p>
      ) : (
        <p>{text}</p>
      )}
      {list.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
      <button
        onClick={() => {
          dispatch(
            addProduct({
              title: "Poulet Croquant Addd",
              price: 17.99,
            })
          );
        }}
      >
        Ajouter
      </button>
    </div>
  );
}

export default Cart;
