import React,{useEffect,useState} from 'react';
import Recipe from './recipe'
import './App.css';

const App =()=>{
  const API_ID='662917b8'
  const API_KEY='62d515f56ec436f74bea662e2bcf33f7';

  const [recipes, setRecipes]=useState([]);
  const [search, setSearch]=useState('');
  const [query, setQuery]=useState('chicken')

  useEffect(()=>{
    getRecipies();
  },[query])

  const getRecipies= async()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data=await response.json();
    setRecipes(data.hits)
  }

  const onUpdateChange= e =>{
    setSearch(e.target.value);
   
  }

  const getSearch= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className="search-bar" 
        type='text' 
        value={search}
        onChange={onUpdateChange}/>
        <button className="search-button" type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe =>(
          <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />))}
      </div>
    </div>
  )
}

export default App;
