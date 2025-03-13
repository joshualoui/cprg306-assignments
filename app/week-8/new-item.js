import { useState } from "react";

export default function Counter({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    //prevent default
    event.preventDefault();
    //create object
    let item = { name, category, quantity };
    //log object to console
    console.log(item);
    if (name === "") {
      alert("Shopping list item cannot be empty.");
    } else {
      onAddItem(item);
    }

    //reset form
    setQuantity(1);
    setName("");
    setCategory("Produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const increment = () => {
    setQuantity(quantity + 1);
    if (quantity >= 19) {
      alert("You have reached the maximum value of the counter (20)");
    }
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    if (quantity <= 2) {
      alert("You have reached the minimum value of the counter (1)");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {/* Quantity Section */}

        <div className="bg-gray-700 p-2 m-2 rounded flex flex-col items-left justify-center max-w-fit">
          <p>Quantity: {quantity}</p>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={increment}
              className="p-2 m-2 text-green-400 bg-blue-500 hover:bg-blue-300  active:bg-yellow-400 w-38 rounded disabled:bg-gray-600 disabled:text-white"
              disabled={quantity >= 20}
            >
              Add 1
            </button>

            <button
              type="button"
              onClick={decrement}
              className="p-2 m-2 text-yellow-300 bg-red-500 hover:bg-red-300 active:bg-yellow-400 w-38 rounded  disabled:bg-gray-600 disabled:text-white"
              disabled={quantity <= 1}
            >
              Minus 1
            </button>
          </div>
        </div>

        {/* Name Section */}
        <div className="bg-gray-700 p-2 m-2 rounded max-w-fit">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => handleNameChange(event)}
            className="text-teal-600 ml-3 p-2 rounded font-bold"
            placeholder="Enter item name"
          />
        </div>
        {/* Category Section */}
        <div className="bg-gray-700 p-3 m-2 rounded max-w-fit">
          <label>Category:</label>
          <select
            value={category}
            className="text-teal-600 ml-3 p-2 rounded"
            onChange={(event) => handleCategoryChange(event)}
          >
            <option disabled>Category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Good</option>
            <option value="Household">Household</option>
          </select>
        </div>

        {/* submit button */}
        <div className="flex items-center justify-center w-1/12">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-300 active:bg-green-400 w-max rounded-xl p-2 ml-12"
          >
            Submit{" "}
          </button>
        </div>
      </form>
    </main>
  );
}
