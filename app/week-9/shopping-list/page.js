"use client";
import MealIdeas from "./meal-ideas.js";
import List from "./item-list.js";
import Link from "next/link";
import Counter from "../../week-8/new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleItemSelect = (item) => {
    const cleanName = item
      .split(" ")[0]
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    setSelectedItemName(cleanName);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main>
      <h1 className="font-bold text-teal-600 text-4xl">Shopping List</h1>
      <p className="hover:text-sky-400 underline">
        <Link href="/">Home</Link>{" "}
      </p>
      <div className="flex">
        <div className="flex-2">
          <Counter onAddItem={handleAddItem} />
          <List onItemSelect={handleItemSelect} items={items} />
        </div>
        <div className="flex pl-20">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
