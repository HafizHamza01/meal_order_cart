import React from "react";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [modalCart, setModalCart] = useState([]);
  const onAdd = (item) => {
    const exist = modalCart.find((x) => {
      return x.id === item.id;
    });
    if (exist) {
      setModalCart(
        modalCart.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        )
      );
    } else {
      setModalCart([...modalCart, { ...item, quantity: 1 }]);
    }
  };
  return (
    <div>
      <Header fullArray={modalCart} />
      <Meal fullArray={modalCart} onAdd={onAdd} />
    </div>
  );
};

export default App;
