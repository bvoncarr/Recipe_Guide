const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = '';
const appID = '713a02bd';
const apiKey = 'e8f480e6ca2fb549cf77a52d2356c058';
const baseURL = `https://api.edamam.com/search?q=pizza`;

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector ("input").value;
    fetchAPI();

});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appID}&app_key=${apiKey}&from=0&to=10`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results){
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=  `
        <div class="item">
            <img src="${result.recipe.image}" alt=" "/>
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(0)}</p>
            <p class="item-data">Diet label: ${
                result.recipe.dietLabels.length > 0
                  ? result.recipe.dietLabels
                  : "No Data Found"
              }</p>
              <p class="item-data">Health-labels!!: ${result.recipe.healthLabels}</p>
              <p class="item-data">Dish-Type: ${result.recipe.dishType}</p>
              <p class="item-data">Ingredients: ${result.recipe.ingredientLines}</p>
            </div>
        </div>
         `;
   
    });
    searchResultDiv.innerHTML = generatedHTML;
}