import recipeStyle from './recipe.module.css'
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={recipeStyle.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map((ingredient, index)=> (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
            <p><b>Totle calories:</b> {Math.round(calories)}</p>
            <img src={image} alt="" className={recipeStyle.image}/>
        </div>
    )
}

export default Recipe;