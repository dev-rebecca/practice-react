import HatItemForm from "../HatItem/HatItemForm";
import classes from "./HatItem.module.css";

const HatItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.hat}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <HatItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default HatItem;
