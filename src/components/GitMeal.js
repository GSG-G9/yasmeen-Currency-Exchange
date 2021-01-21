import React, { useEffect, useState } from 'react';

function GetCurrency() {
  const [search, setSearch] = useState();
  const [meal, setMeal] = useState();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((res) => setMeal(res.meals[0]))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <p>Enter Meal : </p>
      <input type="text" value={search} onChange={handleChange} />
      <p>{meal && meal.strCategory}</p>
    </div>
  );
}
export default GetCurrency;
