import React from "react";
import Pizza from "./Pizza";

const Menu = ({ pizzaData }) => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData &&
          pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              // name={pizza.name}
              // ingredients={pizza.ingredients}
              // photoName={pizza.photoName}
              // price={pizza.price}
              pizzaObj={pizza}
            />
          ))}
      </ul>
    </div>
  );
};

export default Menu;
