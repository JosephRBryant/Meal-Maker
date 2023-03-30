let dishes = [];

    // selectors

const cuisineInput = document.querySelector('.cuisine-input');
const cuisineButton = document.querySelector('.cuisine-button');
const cuisineSelect = document.querySelector('.cuisine-select');
const dishSelect = document.querySelector('.dish-select');
const dishInput = document.querySelector('.dish-input');
const dishButton = document.querySelector('.dish-button')

  // Event Listeners

cuisineButton.addEventListener('click', pushCuisine);
dishButton.addEventListener('click', pushDish);

  // Functions
    // Add Cuisine Type

function pushCuisine(event) {
    event.preventDefault();
    const cuisineValue = document.querySelector('.cuisine-input').value;
    dishes.push(
        {
            cuisine: cuisineValue.toLowerCase(),
            entree: [],
            side: [],
            dessert: []
        }
    );
    const capitalizedCuisine = cuisineValue.charAt(0).toUpperCase() + cuisineValue.slice (1);
    cuisineSelect.options.add( new Option(capitalizedCuisine, dishes.length - 1));
    document.querySelector('.cuisine-input').value = '';
};

    // Add Dish

function pushDish(event) {
    event.preventDefault();
    const dishValue = document.querySelector('.dish-input').value;
    const dishSelectValue = document.querySelector('.dish-select').value;
    const cuisineSelectValue = document.querySelector('.cuisine-select').value;
    dishes[cuisineSelectValue][dishSelectValue].push(dishValue);
    document.querySelector('.dish-input').value = '';
    console.log(dishes);
};

const getRandomMeal = () => {
    const myMeal = document.getElementById('my-meal');

    const randomCuisine = dishes[Math.floor(Math.random() * dishes.length)];
    const randomEntree = randomCuisine.entree[Math.floor(Math.random() * randomCuisine.entree.length)];
    const randomSide = randomCuisine.side[Math.floor(Math.random() * randomCuisine.side.length)];
    const randomDessert = randomCuisine.dessert[Math.floor(Math.random() * randomCuisine.dessert.length)];    
    console.log(`For dinner tonight we will have ${randomEntree.toLowerCase()} with a side of ${randomSide.toLowerCase()} and ${randomDessert.toLowerCase()} for dessert. Bon Apetite!`)
    myMeal.innerHTML = `For dinner tonight we will have <span>${randomEntree.toLowerCase()}</span> with a side of <span>${randomSide.toLowerCase()}</span> and <span>${randomDessert.toLowerCase()}</span> for dessert.`
};