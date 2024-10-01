"use client";
import { useState } from "react";
import { useEffect } from "react";

function Meals() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
    const data = await res.json();
    console.log(data);
    setMeals(data.meals);
  };

  return (
    <div className="mt-12">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="p-4 outline-none border-transparent text-slate-400"
        type="text"
        placeholder="search meals..."
      />
      <button onClick={loadData} className="bg-red-400 p-4">
        Search
      </button>
      <div className="gird grid-cols-3 gap-12">
        {meals?.map((meal) => (
          <div key={meal.id} className="border-2 p-4">
            <h5 className="text-xl">{meal.strMeal}</h5>
            <p>{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
