import React from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import {getRecipeFromOllama} from "../ai"
export default function Main() {
    const [ingredients,setNewlist] = React.useState([]);

    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
          const recipeMarkdown= await getRecipeFromOllama(ingredients);
          setRecipe(recipeMarkdown)
    }
    const IngredientList = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);

    function handleSubmit(event) {
    event.preventDefault();
    /* It is used to prevent the default behavior of an event from 
    occurring. In the context of a form submission, it prevents the form from being submitted 
    and the page from reloading. This allows you to handle the form submission with JavaScript,
    such as adding the new ingredient to the list without refreshing the page.
    */
    const formdata = new FormData(event.currentTarget);
    /* The above code creates a new FormData object, which is used to capture the data from the
    form that was submitted. The event.target refers to the form element that triggered the 
    submit event. By passing it to the FormData constructor, you can easily access the values
        of the form fields using their names. In this case, you can retrieve the value of the 
        "ingredient" input field using formdata.get("ingredient"). */
    const newingredient = formdata.get("ingredient");
    /* The above code retrieves the value of the "ingredient" input field from the form data.
    The formdata.get("ingredient") method is used to access the value of the input field with
        the name "ingredient". This allows you to capture the user's input and use it for further
        processing, such as adding it to the list of ingredients. */
    /*console.log(newingredient);*/
    /*Add the new ingredient to the list */
    /*ingredients.push(newingredient); */
    /*The above code adds the new ingredient to the ingredients array. By using the push() method,
    you can append the new ingredient to the end of the array. This allows you to keep track of
        all the ingredients that have been added, and you can later use this array to render the list
        of ingredients in the UI. */
    /* console.log(ingredients); */
    setNewlist(prev=>[...prev,newingredient]);
    event.currentTarget.reset();
    }
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input type="text" id="ingredient" name="ingredient" aria-label="Add Ingredient" placeholder="e.g. Oregano" />
        <button type="submit">+ Add Ingredient</button>
      </form>
      {ingredients.length>0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}

      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}