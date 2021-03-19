
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

//Beverly's code below

function randomDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      
      response.json().then(function(data) {
        // console.log(data);
        displayRandomDrink(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

randomDrink();

function displayRandomDrink(drink) {
    console.log(drink.drinks[0].strDrink);

    let drinkSection = document.querySelector('#drink-section');

    let drinkName = document.createElement('h4');

    drinkName.innerHTML = drink.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement('img');
    img.src = drink.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img);


    // for(let i = 1; i < 16; i++)
    //     console.log(i);

        let ingredient = document.createElement("p");
        ingredient.innerHTML = drink.drinks[0][`strIngredient${1}`] + ":";

        drinkSection.appendChild(ingredient);

          let measure = document.createElement('p');
        measure.innerHTML = drink.drinks[0][`strMeasure${1}`];

        drinkSection.appendChild(measure)

        let ingredient2 = document.createElement("p");
        ingredient2.innerHTML = drink.drinks[0][`strIngredient${2}`] + ":";

        drinkSection.appendChild(ingredient2);

            let measure2 = document.createElement('p');
        measure2.innerHTML = drink.drinks[0][`strMeasure${2}`];

        drinkSection.appendChild(measure2)

         let ingredient3 = document.createElement("p");
        ingredient3.innerHTML = drink.drinks[0][`strIngredient${3}`] + ":";

        drinkSection.appendChild(ingredient3);

              let measure3 = document.createElement('p');
        measure3.innerHTML = drink.drinks[0][`strMeasure${3}`];

        drinkSection.appendChild(measure3)

         let ingredient4 = document.createElement("p");
        ingredient4.innerHTML = drink.drinks[0][`strIngredient${4}`] + ":";

        drinkSection.appendChild(ingredient4);

          let measure4 = document.createElement('p');
        measure4.innerHTML = drink.drinks[0][`strMeasure${4}`];
        drinkSection.appendChild(measure4)

         let ingredient5 = document.createElement("p");
        ingredient5.innerHTML = drink.drinks[0][`strIngredient${5}`] + ":";

        drinkSection.appendChild(ingredient5);

           let measure5 = document.createElement('p');
        measure5.innerHTML = drink.drinks[0][`strMeasure${5}`];
        drinkSection.appendChild(measure5)

        let ingredient6 = document.createElement("p");
        ingredient6.innerHTML = drink.drinks[0][`strIngredient${6}`] + ":";

        drinkSection.appendChild(ingredient6);

          let measure6 = document.createElement('p');
        measure6.innerHTML = drink.drinks[0][`strMeasure${6}`];
        drinkSection.appendChild(measure6)

       if(drink.drinks[0][`strMeasure${3}`] == null)
            measure3.innerHTML = "";

            if(drink.drinks[0][`strMeasure${4}`] == null)
            measure4.innerHTML = "";

            if(drink.drinks[0][`strMeasure${5}`] == null)
            measure5.innerHTML = "";

            if(drink.drinks[0][`strMeasure${6}`] == null)
            measure6.innerHTML = "";
       
  if(drink.drinks[0][`strIngredient${3}`] == null)
            ingredient3.innerHTML = "";

            if(drink.drinks[0][`strIngredient${4}`] == null)
            ingredient4.innerHTML = "";

            if(drink.drinks[0][`strIngredient${5}`] == null)
            ingredient5.innerHTML = "";
            if(drink.drinks[0][`strIngredient${6}`] == null)
            ingredient6.innerHTML = "";
}






















