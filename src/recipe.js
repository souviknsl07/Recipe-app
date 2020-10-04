import React from 'react';
import style from './Recipe.module.css'

const recipe =({title,calories,image,ingredients})=>{
	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ol>
				<h3>Ingredients</h3>
				{ingredients.map((ingredient)=>(
					
					<li>

					{ingredient.text}</li>
					
				))}
			</ol>
			<p>Calories: {calories}</p>
			<img className={style.image} src={image} alt=''/>
		</div>
	)
}

export default recipe;