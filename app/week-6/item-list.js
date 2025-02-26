import Item from "./item.js";
import itemData from "./items.json";
import { useState } from "react";

export default function List() {
  const [sortBy, setSortBy] = useState("name");
  const newItemList = [...itemData];

  newItemList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return (
    <div>
      {itemData.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
