import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/CartSlice";
import { toast } from "react-toastify";
const Card = ({ name, image, id, price, type }) => {
  let dispatch = useDispatch();
  return (
    <div className=" w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300">
      <div className=" w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className=" object-cover"></img>
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-[100%] flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs{price}</div>
        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}{" "}
          <span>{type}</span>
        </div>
      </div>
      <button
        className=" w-full bg-green-300 p-3 rounded-lg  hover:bg-green-500 transition-all text-white"
        onClick={() => {
          dispatch(AddItem({ id, name, price, image, qty: 1 }));
          toast.success("Added to cart");
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
