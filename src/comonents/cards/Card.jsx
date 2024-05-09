import React from "react";
import "./card.css";
import { IoLocationOutline } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import ReactStars from "react-stars";
const Card = ({ name, address, rating, outcode, postcode, type_of_food }) => {
  return (
    <div className="card">
      <div className="top">
        <div className="name_rating">
          <p>{name}</p>
          <ReactStars count={rating} size={24} color2={"#ff8800"} />
        </div>

        <IoLocationOutline />
        <span>{address}</span>
        <p>
          {outcode} {postcode}
        </p>
      </div>

      <div className="text">
        <CiForkAndKnife />
        <span>{type_of_food}</span>
        <p>
          <a href="">Visit Menu</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
