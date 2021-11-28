import React from "react";
import "./Food.css";

function Food({  allItems }) {
  return (
    <div className="allFood">
      {allItems.map((food) => {
        return (
          <div className="generalFood">
            <img
              src={
                food.menuname.includes("i")
                  ? food.images[0]
                  : food.menuname.includes("e")
                  ? food.images[1]
                  : food.images[2]
              }
              alt="food"
            />
            <div className="foodInfo">
              <h4>{food.menuname}</h4>
              <p>{food.description}</p>
            </div>
            <button className="orderIt">Order it</button>

            <button className="price"> {food.menuname.length + "€"} </button>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default Food;
