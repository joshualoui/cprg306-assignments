import {useState} from "react";

export default function Counter() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
        if (quantity >= 19) {
            alert("You have reached the maximum value of the counter (20)");
        }
    }

    const decrement = () => {
        setQuantity(quantity - 1);
        if (quantity <= 2) {
            alert("You have reached the minimum value of the counter (1)");
        }
    }

    return (
        <main>
          <h1>Week 4</h1>
          <div>
              <p>Quantity: {quantity}</p>
              <p>The increment and decrement counter</p>
              <button onClick={increment} className="p-2 m-2 text-green-400 bg-blue-500 hover:bg-blue-300  active:bg-yellow-400 w-38 rounded disabled:bg-gray-600 disabled:text-white" disabled={quantity>=20}>Add 1</button>
  
              <button onClick={decrement} className="p-2 m-2 text-yellow-300 bg-red-500 hover:bg-red-300 active:bg-yellow-400 w-38 rounded  disabled:bg-gray-600 disabled:text-white" disabled={quantity<=1}>Minus 1</button>
          </div>
        </main>
      );
}