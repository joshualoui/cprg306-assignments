"use client";
import Item from "./item.js";
import itemData from "./items.json";
import { useState } from "react";

export default function List() {
  const [sortBy, setSortBy] = useState("name");
  const [toggleName, setToggleName] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false);

  // itemData.sort((a, b) => a.name.localeCompare(b.name));
  // itemData.sort((a, b) => a.category.localeCompare(b.category));

  const handleClickName = (click) => {
    itemData.sort((a, b) => a.name.localeCompare(b.name));
    setSortBy(click);
  };

  const handleClickCategory = (click) => {
    itemData.sort((a, b) => a.category.localeCompare(b.category));
    setSortBy(click);
  };

  return (
    <main>
      <button
        onClick={() => {
          handleClickName("name");
          setToggleName(true);
          setToggleCategory(false);
        }}
        className={`p-2 m-2 text-teal-600 ${
          toggleName ? "bg-blue-700" : "bg-slate-800"
        } hover:bg-gray-600 w-38 rounded`}
      >
        Name
      </button>
      <button
        onClick={() => {
          handleClickCategory("category");
          setToggleCategory(true);
          setToggleName(false);
        }}
        className={`p-2 m-2 text-teal-600 ${
          toggleCategory ? " bg-blue-700 " : "bg-gray-800"
        } hover:bg-gray-600 w-38 rounded`}
      >
        Category
      </button>
      {itemData.map((item) => (
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
