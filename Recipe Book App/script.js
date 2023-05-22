
const API_KEY ="4d51cb954b09470e8b44ec24359523c6"
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe)=>{
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.atl = "Recipe Image";
        
        recipeH2El = document.createElement("h2");
        recipeH2El.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
            <strong> Ingredients:</strong> ${recipe.extendedIngredients
                .map((ingredient) => ingredient.original)
                .join(", ")}
            `;
        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href= recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";  	
        
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeH2El);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    })

};

async function getRecipes(){
    const response =await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
};

async function init(){
    const recipes = await getRecipes();
    console.log(recipes);
    displayRecipes(recipes);
};

init();