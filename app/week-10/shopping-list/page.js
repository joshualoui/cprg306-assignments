"use client";
import MealIdeas from "./meal-ideas.js";
import List from "./item-list.js";
import Link from "next/link";
import Counter from "../../week-8/new-item.js";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user } = useUserAuth();

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

  const handleAddItem = async (item) => {
    try {
      const itemId = await addItem(user.uid, item); //gets item id from firestore.
      const newItemId = { id: itemId, ...item }; //adds the item to the list with the firestore id.
      setItems((prevItems) => [...prevItems, newItemId]); //previtems is the current list. newItemId adds the new item to the list with firestore id.
      //couldnt just setItems(newItemId) because it would replace the entire list with the new item.
      //needed to keep the old items and add the new item to the list, used spreader operator to do that.
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const loadItems = async () => {
    if (user) {
      const items = await getItems(user.uid);
      setItems(items);
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  if (!user) {
    return (
      <main>
        <div>You're not allowed to view the shopping list!!</div>
        <div>
          {" "}
          Time to go{" "}
          <Link className="hover:text-sky-400 underline" href="/week-10">
            BACK
          </Link>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <h1 className="font-bold text-teal-600 text-4xl">Shopping List</h1>
        <p className="hover:text-sky-400 underline">
          <Link href="/">Home</Link>{" "}
        </p>
        <p className="hover:text-sky-400 underline">
          <Link href="/week-10">Back to week 10</Link>{" "}
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
}
