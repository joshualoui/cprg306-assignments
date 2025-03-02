"use client";
import Item from "./item.js";
import itemData from "./items.json";
import { useState } from "react";

export default function List() {
  const [sortBy, setSortBy] = useState("name");
  const [itemList, setItemList] = useState(itemData);
  let newItemList = [...itemData];
  let list = [...itemList];
  //newItemList.sort((a, b) => a.name.localeCompare(b.name));

  const handleClick = (sort) => {
    if (sort === "name") {
      const sortedList = [
        ...itemList.sort((a, b) => a.name.localeCompare(b.name)),
      ];
      setItemList(sortedList);
    }
  };

  return (
    <main>
      <button
        onClick={() => handleClick("name")}
        className="p-2 m-2 text-teal-600 bg-slate-700  hover:bg-gray-800  active:bg-blue-700 w-38 rounded disabled:bg-gray-600 disabled:text-white"
      >
        Name
      </button>
      {/* <button
        onClick={() => handleClick("catgeory")}
        className="p-2 m-2 text-teal-600 bg-slate-700 hover:bg-gray-800  active:bg-blue-700 w-38 rounded disabled:bg-gray-600 disabled:text-white"
      >
        Category
      </button> */}
      {newItemList.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </main>
  );
}
