// Create Dishes Array of Objects
let dishes = [];
// Function to Get Dish Array from Local Storage
function getLocalStorage() {
    // If No Dishes Array Create Array, Otherwise Parse Dishes Arr from Local Storage
    if(localStorage.getItem('dishes') === null) {
        dishes = [];
        } else {
            dishes = JSON.parse(localStorage.getItem('dishes'));
    }
    // For Each Stored Cuisine Repopulate Options Drop Down
    for (let i = 0; i < dishes.length; i++) {
        // Capitalize Cuisine for Option HTML
        const capitalizedCuisine = dishes[i].cuisine.charAt(0).toUpperCase() + dishes[i].cuisine.slice (1);
        // Add New Cuisine Option
        cuisineSelect.options.add( new Option(capitalizedCuisine, dishes.length - 1));
    }
};

/*              Selectors                */

const cuisineInput = document.querySelector('.cuisine-input');
const cuisineButton = document.querySelector('.cuisine-button');
const cuisineSelect = document.querySelector('.cuisine-select');
const dishSelect = document.querySelector('.dish-select');
const dishInput = document.querySelector('.dish-input');
const dishButton = document.querySelector('.dish-button')

/*              Event Listeners                */

document.addEventListener('DOMContentLoaded', getLocalStorage);
cuisineButton.addEventListener('click', pushCuisine);
dishButton.addEventListener('click', pushDish);

/*              Functions                */

// Add Cuisine Type
function pushCuisine(event) {
    event.preventDefault();
    // Cuisine Input
    const cuisineValue = document.querySelector('.cuisine-input').value;
    // Push Cuisine Object to Dishes
    dishes.push(
        {
            cuisine: cuisineValue.toLowerCase(),
            entree: [],
            side: [],
            dessert: []
        }
    );
    // Clear Local Storage for Update
    localStorage.clear();
    // Update Local Storage with Newest Cuisine Addition
    localStorage.setItem('dishes', JSON.stringify(dishes));
    // Capitalize Cuisine for Option HTML
    const capitalizedCuisine = cuisineValue.charAt(0).toUpperCase() + cuisineValue.slice (1);
    // Add New Cuisine Option
    cuisineSelect.options.add( new Option(capitalizedCuisine, dishes.length - 1));
    // Clear Cuisine Input Field
    document.querySelector('.cuisine-input').value = '';
};

// Add Dish

function pushDish(event) {
    event.preventDefault();
    // Dish Input
    const dishValue = document.querySelector('.dish-input').value;
    // Selected Dish Type
    const dishSelectValue = document.querySelector('.dish-select').value;
    // Selected Cuisine Type
    const cuisineSelectValue = document.querySelector('.cuisine-select').value;
    // Push Dish to Dishes selected cuisine obj, categorized under Selected Dish Type
    dishes[cuisineSelectValue][dishSelectValue].push(dishValue);
    // Clear Local Storage for Update
    localStorage.clear();
    // Update Local Storage with Newest Cuisine Addition
    localStorage.setItem('dishes', JSON.stringify(dishes));
    // Clear Dish Type Input Field
    document.querySelector('.dish-input').value = '';
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

