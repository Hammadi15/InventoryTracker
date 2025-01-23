"use client";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import pic1 from "../app/pic/pic1.png";
import { useState } from "react";
import product1 from "../app/pic/product1.png";

type CardProps = {
  //created props
  name: string; //name string
  userName: string; //usewrname srting
};
const Card = ({ name, userName }: CardProps) => {
  const [count, SetCount] = useState(12);
  //created prop both name,userName
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        {" "}
        {/* created dasyUi Compoment */}
        <div className="card-body">
          <h2 className="card-title">{userName}</h2> {/*  props with userName*/}
          <div className="flex items-center">
            <div className=" h-10 w-10">
              <Image src={product1} alt="Test" /> {/* picture */}
            </div>
            <button
              id="increaseButton"
              className="btn btn-xs"
              onClick={() => {
                SetCount((val) => val + 1);
              }}
            >
              +
            </button>{" "}
            {/* created button*/}
            <label id="countLabel">{count}</label>
            <button
              id="decreaseButton"
              className="btn btn-xs"
              onClick={() => {
                SetCount((val) => val - 1);
              }}
            >
              -
            </button>
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
