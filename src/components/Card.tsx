"use client";
import React, { useState } from "react";
import Image from "next/image";
import pic1 from "../app/pic/pic1.png";
type CardProps = {
  //created props
  name: string; //name string
  userName: string; //usewrname srting
};

const Card = ({ name, userName }: CardProps) => {
  const [count, setCount] = useState(0);

  //created prop both name,userName
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        {" "}
        {/* created dasyUi Compoment */}
        <div className="card-body">
          <h2 className="card-title">{userName}</h2> {/*  props with userName*/}
          <div className="flex items-center">
            <div className=" h-10 w-10">
              <Image src={pic1} alt="Test" /> {/* picture */}
            </div>
            <button onClick={handleIncrease} className="btn btn-xs">
              +
            </button>{" "}
            {/* created button*/}
            <label ></label>
            <button className="btn btn-xs">-</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
