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
    //TODO: add alert when input is empty, right not its only when i delete the input
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
      <h1>Week 5</h1>
      <form onSubmit={handleSubmit}>
        {/* Quantity Section */}

        <div>
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
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => handleNameChange(event)}
            className="text-green-400"
            placeholder="Enter item name"
          />
        </div>
        {/* Category Section */}

        {/* TODO: Maybe its on hover?? change font to be visible */}
        <div>
          <label htmlFor="category">Category:</label>
          <select onChange={(event) => handleCategoryChange(event)}>
            <option className="text-green-500" value="Produce">
              Produce
            </option>
            <option className="text-green-500" value="Dairy">
              Dairy
            </option>
            <option className="text-green-500" value="Bakery">
              Bakery
            </option>
            <option className="text-green-500" value="Meat">
              Meat
            </option>
            <option className="text-green-500" value="Canned Goods">
              Canned Goods
            </option>
            <option className="text-green-500" value="Dry Goods">
              Dry Good
            </option>
            <option className="text-green-500" value="Household">
              Household
            </option>
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
