"use client";
import Item from "./item.js";
//import itemData from "./items.json";
import { useState } from "react";

export default function List({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [toggleName, setToggleName] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false);

  //created new array to not change orignial json.
  const sortedItemName = [...items].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const sortedItemCategory = [...items].sort((a, b) =>
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
        } `}
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
        } `}
      >
        Category
      </button>

      {(sortBy === "name" ? sortedItemName : sortedItemCategory).map((item) => (
        <Item
          key={`${item.id}-${item.name}`}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </main>
  );
}
