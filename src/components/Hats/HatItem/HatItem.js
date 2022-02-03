import { useContext } from "react";

import HatItemForm from "../HatItem/HatItemForm";
import cartContext from "../../../store/cart-context";
import classes from "./HatItem.module.css";

const HatItem = (props) => {
  const cartCtx = useContext(cartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.hat}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <HatItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default HatItem;
