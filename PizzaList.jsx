import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Satisfy Your Cravings With Our Delicious Pizzas </h1>
      <p className={styles.desc}>
        Your digital gateway to a world of delicious pizza delights! We've crafted this online platform with pizza lovers like you in mind, making it easier than ever to satisfy your cravings and enjoy the perfect slice.Simply select your preferred pizzas, customize them to your heart's content, and choose between convenient delivery or easy pickup options.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;   
