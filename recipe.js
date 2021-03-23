console.log('js is working')

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
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appID}&app_key=${apiKey}&from=0&to=15`;
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
                <h4 class="title">${result.recipe.label}</h4>
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


//beverly's fetch code below:


function randomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      
      response.json().then(function(data) {
        console.log(data);
        displayRandomCocktail(data);
      });
    }
  )
  .catch(function(err) {
    console.log(err);
  });
}

randomCocktail();

var button = document.getElementById("random-drink");
button.addEventListener("click", function(event) {
    console.log("clicked");
    location.reload();    
})

function displayRandomCocktail(cocktail) {
    
    console.log(cocktail.drinks[0]);
    
    let drinkSection = document.querySelector('#drink-section');

    let drinkName = document.createElement('h5');
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img);

    let i;

    for(let i = 1; i < 16; i++) {
        console.log(i);
        if(cocktail.drinks[0][`strIngredient${i}`] == null || cocktail.drinks[0][`strMeasure${i}`] == null) {
            break;
        } 

        let ingredient = document.createElement('h6');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + " " + cocktail.drinks[0][`strIngredient${i}`];
    
        drinkSection.appendChild(ingredient);

    }
      
    }

    //code for swiper:

var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
