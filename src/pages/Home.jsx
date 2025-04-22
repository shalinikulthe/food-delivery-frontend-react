import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../categories";
import Card from "../components/Card";
import { food_items } from "../Food";
import { dataContext } from "../context/Usercontext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  let { categories, setCategories, input, showCards, setShowCards } =
    useContext(dataContext);

  const filter = (category) => {
    if (category === "all") {
      setCategories(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCategories(newList);
    }
  };

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-md shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                {item.icons}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className=" w-full gap-[20px] px-5 flex flex-wrap justify-center items-center pt-8 pb-8-">
        {categories.length > 1 ? (
          categories.map((ittem) => (
            <Card
              name={ittem.food_name}
              image={ittem.food_image}
              price={ittem.price}
              id={ittem.id}
              type={ittem.food_type}
            />
          ))
        ) : (
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            No dish found
          </div>
        )}
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCards ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className=" w-[100%] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold ">
            Order Items
          </span>
          <RxCross2
            className="text-green-400 text-[18px] font-semibold  w-[30px] h-[30px] cursor-pointer hover:text-gray-600 "
            onClick={() => setShowCards(false)}
          />
        </header>
        {items.length > 0 ? (
          <>
            <div className="w-full mt-8 flex flex-col gap-5">
              {items.map((item) => (
                <Card2
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className="w-full border-t-2 border-b-2 border-gray-600 mt-7 gap-2 p-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-lg text-green-400 font-semibold">
                  {subtotal}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-lg  text-green-400 font-semibold">
                  {deliveryFee}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-lg  text-green-400 font-semibold">
                  {taxes}
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-2xl text-gray-600 font-semibold p-9 ">
                Total
              </span>
              <span className="text-2xl  text-green-400 font-semibold">
                {total}/-
              </span>
            </div>
            <button
              className=" w-[80%] bg-green-300 p-3 rounded-lg  hover:bg-green-500 transition-all text-white"
              onClick={() => toast.success("Order Placed..p")}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
