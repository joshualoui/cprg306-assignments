"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data;
  }

  async function loadMealIdeas() {
    try {
      const data = await fetchMealIdeas(ingredient);
      setMeals(data.meals);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <main>
      <h1 className="font-bold text-teal-600 text-4xl">
        Meal Ideas for {ingredient}
      </h1>
      <div>
        {meals == !null ? (
          <ul>
            {meals.map((food) => (
              <li key={food.idMeal}>
                <p>{food.strMeal}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No meals found for "{ingredient}".</p>
        )}
      </div>
    </main>
  );
}
