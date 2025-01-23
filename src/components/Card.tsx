"use client";
import React, { useState } from "react";
import Image from "next/image";
import product1 from "../app/pic/product1.png";
import product2 from "../app/pic/product2.png";
import product3 from "../app/pic/product3.png";
import product4 from "../app/pic/product4.png";
import product5 from "../app/pic/product5.png";

type CardProps = {
  //created props
  name: string; //name string
  userName: string; //usewrname srting
};

const Card = ({ name, userName }: CardProps) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  //created prop both name,userName
  const handleIncrease1 = () => {
    setCount1(count1 + 1);
  };

  const handleIncrease2 = () => {
    setCount2(count2 + 1);
  };

  const handleIncrease3 = () => {
    setCount3(count3 + 1);
  };

  const handleIncrease4 = () => {
    setCount4(count4 + 1);
  };

  const handleIncrease5 = () => {
    setCount4(count4 + 1);
  };

  const handleDecrease1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

  const handleDecrease2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  };

  const handleDecrease3 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1);
    }
  };

  const handleDecrease4 = () => {
    if (count4 > 0) {
      setCount4(count4 - 1);
    }
  };

  const handleDecrease5 = () => {
    if (count5 > 0) {
      setCount5(count5 - 1);
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
              <Image src={product1} alt="Test" /> {/* picture */}
            </div>
            <button onClick={handleIncrease1} className="btn btn-xs">
              {" "}
              {/* increase button by 1*/}+
            </button>
            {/* created button*/}
            <label id="countLabel">{count1}</label>
            <button onClick={handleDecrease1} className="btn btn-xs">
              -
            </button>{" "}
            {/* decrease button by -1*/}
          </div>
          

          <div className="flex items-center">
            <div className=" h-10 w-10">
              <Image src={product2} alt="Test" /> {/* picture */}
            </div>
            <button onClick={handleIncrease2} className="btn btn-xs">
              {" "}
              {/* increase button by 1*/}+
            </button>
            {/* created button*/}
            <label id="countLabel">{count2}</label>
            <button onClick={handleDecrease2} className="btn btn-xs">
              -
            </button>{" "}
            {/* decrease button by -1*/}
          </div>

          <div className="flex items-center">
            <div className=" h-10 w-10">
              <Image src={product3} alt="Test" /> {/* picture */}
            </div>
            <button onClick={handleIncrease3} className="btn btn-xs">
              {" "}
              {/* increase button by 1*/}+
            </button>
            {/* created button*/}
            <label id="countLabel">{count3}</label>
            <button onClick={handleDecrease3} className="btn btn-xs">
              -
            </button>{" "}
            {/* decrease button by -1*/}
          </div>

          <div className="flex items-center">
            <div className=" h-10 w-10">
              <Image src={product4} alt="Test" /> {/* picture */}
            </div>
            <button onClick={handleIncrease4} className="btn btn-xs">
              {" "}
              {/* increase button by 1*/}+
            </button>
            {/* created button*/}
            <label id="countLabel">{count4}</label>
            <button onClick={handleDecrease4} className="btn btn-xs">
              -
            </button>{" "}
            {/* decrease button by -1*/}
          </div>


          

          <div className="flex items-center">
            <div className=" h-10 w-10">
              <Image src={product5} alt="Test" /> {/* picture */}
            </div>
            <button onClick={handleIncrease5} className="btn btn-xs">
              {" "}
              {/* increase button by 1*/}+
            </button>
            {/* created button*/}
            <label id="countLabel">{count5}</label>
            <button onClick={handleDecrease5} className="btn btn-xs">
              -
            </button>{" "}
            {/* decrease button by -1*/}
          </div>







        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now-</button>
        </div>
      </div>
    </>
  );
};

export default Card;
