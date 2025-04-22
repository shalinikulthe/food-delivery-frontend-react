import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../context/Usercontext";
import { food_items } from "../Food";
import { useSelector } from "react-redux";
function Nav() {
  let { input, setInput, categories, setCategories, showCards, setShowCards } =
    useContext(dataContext);
  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCategories(newList);
  }, [input]);
  let items = useSelector((state) => state.cart);
  return (
    <div className="w-full h-[100px]  flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md">
        <MdFastfood className=" w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded shadow-md md:[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearchSharp className=" text-green-500 w-[25px] h--[25px] " />
        <input
          type="text "
          placeholder="Search Items..."
          className="w-[100%] outline-none text-[16px]md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative"
        onClick={() => setShowCards(true)}
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          {items.length}
        </span>
        <FiShoppingBag className=" w-[30px] h-[30px] text-green-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default Nav;
