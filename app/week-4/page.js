"use client";

import useState from "react";

export default function Page() {
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        setQuantity(quantity + 1);
        if (quantity > 20) {
            alert("You have reached the maximum value of the counter (20");
        }
    }

    const decrement = () => {
        setQuantity(quantity - 1);
    }


    return (
      <main>
        <h1>week 4</h1>
        <div>
            <p>Quantity: {quantity}</p>
            <p>{count}</p>
            <p>The increment and decrement counter</p>
            <button onClick={increment} className="p-2 m-2 bg-blue-500 hover:bg-blue-300 active:bg-yellow-400 w-38 rounded">Increment</button>

            <button onClick={decrement} className="p-2 m-2 bg-red-500 hover:bg-red-300 active:bg-yellow-400 w-38 rounded">Decrement</button>
        </div>
      </main>
    );
  }