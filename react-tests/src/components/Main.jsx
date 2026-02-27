import { useEffect, useState } from 'react';
import { recipeData } from '../recipeData';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  const addIngredient = (formData) => {
    const newIngredient = formData.get('ingredient')
    setIngredients([...ingredients, newIngredient])
    console.log(newIngredient)
  }

  return (
    <>
      <form
        action={addIngredient}
      >
        <input
          type="text"
          placeholder='e.g oregano'
          name='ingredient'
        />
        <button>+ Add ingredient</button>
        {
          ingredients.length > 0 ?
            <section>

              <h2>Ingredients on hand:</h2>
              <ul class="ingredients-list">
                {ingredientListItems}
              </ul>
              {ingredients.length > 3 ?
                <div class="ready">
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
                  <button onClick={() => setRecipeShown(!recipeShown)}>Get a recipe</button>
                </div> : null
              }
            </section>
            : null
        }
      </form>
      {recipeShown ? <section>
        <h2>Chef Claude Recommends:</h2>
        <article className="suggested-recipe-container">
          <h3>{recipeData.recipeName}</h3>
          <p>{recipeData.description}</p>
          <strong>Ingredients:</strong>
          <ul>
            {recipeData.ingredients.map((ingredient) => <li>{ingredient}</li>)}
          </ul>
          <strong>Instructions:</strong>
          <ol>
            {recipeData.instructions.map((instruction) => <li>{instruction}</li>)}
          </ol>
        </article>
      </section> : null}
    </>

  )
}
