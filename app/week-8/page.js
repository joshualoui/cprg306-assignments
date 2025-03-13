"use client";
import MealIdeas from "./meal-ideas.js";
import List from "./item-list.js";
import Link from "next/link";
import Counter from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleItemSelect = (item) => {
    const cleanName = item
      .split(" ")[0]
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
      <div>
        <MealIdeas ingredient={selectedItemName} />
        <MealIdeas ingredient="chicken" />
        <List onItemSelect={handleItemSelect} items={items} />
      </div>
      <Counter onAddItem={handleAddItem} />
    </main>
  );
}
