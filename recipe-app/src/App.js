import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "e71e0475";
  const APP_KEY = "42f9a3eb5700e723845cf7c61184958e";

  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    
    // console.log(data.hits);
  } catch (e) {
    console.log("error--");
  }
  };


  const updateSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchInput);
    setSearchInput("");
  };
  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          name=""
          id=""
          className="search-bar"
          value={searchInput}
          onChange={updateSearch}
          placeholder="Search..."
        />
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
