import React from "react";

const Pizza = ({ pizzaObj }) => {
  const { photoName, name, price, ingredients, soldOut } = pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        <span>{soldOut ? "Sold out" : parseInt(price) + 20}</span>
      </div>
    </li>
  );
};

export default Pizza;
