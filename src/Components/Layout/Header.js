import { Fragment } from "react";
import mealsImg from "../../Assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MealOfIndia</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A tablefull of delicious food items" />
      </div>
    </Fragment>
  );
};

export default Header;
