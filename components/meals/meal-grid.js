import React from "react";
import MealItem from "./meal-item";
import s from "./meal-grid.module.css";

const MealGrid = ({ meals }) => {
  return (
    <ul className={s.meals}>
      {meals &&
        meals?.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
    </ul>
  );
};

export default MealGrid;
