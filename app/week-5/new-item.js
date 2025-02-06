import { useState } from "react";

export default function Counter() {
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
      alert(
        `${quantity} ${name} was added to the list from the ${category} category.`
      );
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

        <div className="bg-gray-700 p-2 m-2 rounded max-w-fit">
          <p>Quantity: {quantity}</p>
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

        {/* Name Section */}
        <div className="bg-gray-700 p-2 m-2 rounded max-w-fit">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => handleNameChange(event)}
            className="text-green-400 ml-3 p-2 rounded"
            placeholder="Enter item name"
          />
        </div>
        {/* Category Section */}
        <div className="bg-gray-700 p-3 m-2 rounded max-w-fit">
          <label>Category:</label>
          <select
            value={category}
            className="text-green-500 ml-3 p-2 rounded"
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-300 active:bg-green-400 w-38 rounded"
        >
          Submit{" "}
        </button>
      </form>
    </main>
  );
}
