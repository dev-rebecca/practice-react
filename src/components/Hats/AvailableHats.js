import Card from "../UI/Card";
// import HatItem from "./HatItem/HatItem";
import classes from "./AvailableHats.module.css";

const AvailableHats = () => {
  const DUMMY_HATS = [
    {
      id: "h1",
      name: "Bucket Hat",
      description: "Finest bucket style hat",
      price: 22.99,
    },
    {
      id: "h2",
      name: "Cowboy Hat",
      description: "A specialty in hat-wearing",
      price: 16.5,
    },
    {
      id: "h3",
      name: "Beret",
      description: "Very fancy",
      price: 12.99,
    },
    {
      id: "h4",
      name: "Baggy Green",
      description: "An honour to be bestowed upon your head",
      price: 18.99,
    },
  ];

  const hatsList = DUMMY_HATS.map((hat) => <li>{hat.name}</li>);

  return (
    <Card>
      <section className={classes.hats}>
        <ul>{hatsList}</ul>
      </section>
    </Card>
  );
};

export default AvailableHats;
