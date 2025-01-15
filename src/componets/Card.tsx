"use client";
import React from "react";
type CardProps = {
  name: string;
  userName : string
};

const Card = ({ name, userName } : CardProps) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={userName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{userName}</h2>
          <p>{name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;