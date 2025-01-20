"use client";
import React from "react";
import Image from "next/image";
import pic1 from "../app/pic/pic1.png";
type CardProps = {
  name: string;
  userName: string;
};

const Card = ({ name, userName }: CardProps) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>

          <div className="flex items-center">
            <div className=" h-12 w-12">
              <Image src={pic1} alt="Test" />
            </div>
            <button className="btn btn-xs">+</button>
            <p className=" flex-grow-0 ml-0">{name}</p>{" "}
            <button className="btn btn-xs">-</button>
          </div>
       

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
