"use client";
import Item from "./item.js";
import itemData from "./items.json";
import { useState } from "react";

export default function List() {
  const [sortBy, setSortBy] = useState("name");
  const [toggleName, setToggleName] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false);

  //created new array to not change orignial json.
  const sortedItemName = [...itemData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const sortedItemCategory = [...itemData].sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  return (
    <main>
      <button
        onClick={() => {
          setSortBy("name");
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
          setSortBy("category");
          setToggleCategory(true);
          setToggleName(false);
        }}
        className={`p-2 m-2 text-teal-600 ${
          toggleCategory ? "bg-blue-700" : "bg-slate-800"
        } hover:bg-gray-600 w-38 rounded`}
      >
        Category
      </button>

      {(sortBy === "name" ? sortedItemName : sortedItemCategory).map((item) => (
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
