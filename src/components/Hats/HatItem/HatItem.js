import classes from "./HatItem.module.css";

const HatItem = (props) => {
  return (
    <div className={classes.hat}>
      <h3>{props.name}</h3>
      <div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
    </div>
  );
};

export default HatItem;
