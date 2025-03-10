"use client";
import List from "./item-list.js";
import Link from "next/link";
import Counter from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main>
      <h1 className="font-bold text-teal-600 text-4xl">Shopping List</h1>
      <p className="hover:text-sky-400 underline">
        <Link href="/">Home</Link>{" "}
      </p>
      <Counter onAddItem={handleAddItem} />
      <List newItem={items} />
    </main>
  );
}
