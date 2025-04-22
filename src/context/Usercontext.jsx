import React, { createContext, useState } from "react";
import { food_items } from "../Food";
export const dataContext = createContext();

function UserContext({ children }) {
  let [input, setInput] = useState("");
  const [categories, setCategories] = useState(food_items);
  const [showCards, setShowCards] = useState(false);
  let data = {
    input,
    setInput,
    categories,
    setCategories,
    showCards,
    setShowCards,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export default UserContext;
