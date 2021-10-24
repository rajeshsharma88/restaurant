import React, { Fragmant } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragmant>
      <MealsSummary />
      <AvailableMeals />
    </Fragmant>
  );
};

export default Meals;
