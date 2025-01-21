"use client";
import React from "react";
import Image from "next/image";
import pic1 from "../app/pic/pic1.png";
type CardProps = {
  //created props
  name: string; //name string
  userName: string; //usewrname srting
};

const Card = ({ name, userName }: CardProps) => {
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
              <Image src={pic1} alt="Test" /> {/* picture */}
            </div>
            <button className="btn btn-xs">+</button> {/* created button*/}
            <p className=" flex-grow-0 ml-0">{name}</p>{" "}
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
