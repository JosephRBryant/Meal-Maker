// let cuisines = ['italian', 'mexican', 'american'];

// let italianEntrees = ['spaghetti', 'lingiuni', 'pizza'];
// let mexicanEntrees = ['tacos', 'burritos', 'fajitas'];
// let americanEntrees = ['burgers', 'hot dogs', 'porkchops'];

// let italianSides = ['garlic bread', 'antipasto salad', 'risotto'];
// let mexicanSides = ['chips and queso', 'guacamole', 'beans and rice'];
// let americanSides = ['french friees', 'mashed potatoes', 'mac and cheese'];

// let allSides = ['side salad', 'caesar salad', 'sourdough'];

// let italianDesserts = ['tiramisu', 'strawberry gellato', 'raspberry bomboloni'];
// let mexicanDesserts = ['sopes', 'churros', 'dulce de leche'];
// let americanDesserts = ['brownies and ice cream', 'banana split', 'coconut pie'];

// const myMeals = {};

// let chooseMeal = () => {
//     myMeals.cuisine = cuisines[Math.floor(Math.random() * cuisines.length)]

//     if (myMeals.cuisine === 'italian') {
//         myMeals.entree = italianEntrees[Math.floor(Math.random() * italianEntrees.length)];
//         myMeals.side = italianSides[Math.floor(Math.random() * italianSides.length)];
//         myMeals.dessert = italianDesserts[Math.floor(Math.random() * italianDesserts.length)];
//     } else if (myMeals.cuisine === 'mexican') {
//         myMeals.entree = mexicanEntrees[Math.floor(Math.random() * mexicanEntrees.length)];
//         myMeals.side = mexicanSides[Math.floor(Math.random() * mexicanSides.length)];
//         myMeals.dessert = mexicanDesserts[Math.floor(Math.random() * mexicanDesserts.length)];
//     } else {
//         myMeals.entree = americanEntrees[Math.floor(Math.random() * americanEntrees.length)];
//         myMeals.side = americanSides[Math.floor(Math.random() * americanSides.length)];
//         myMeals.dessert = americanDesserts[Math.floor(Math.random() * americanDesserts.length)];
//     }

//     console.log(myMeals)
// }

// console.log(chooseMeal());


let dishes = [
    {
        cuisine: 'italian',
        entree: ['pizza', 'spaghetti', 'linguini'],
        side: ['garlic bread', 'fried ravioli', 'antipasto salad', 'risotto'],
        dessert: ['tiramisu', 'strawberry gelato', 'raspberry bomboloni']
    },
    {
        cuisine: 'american',
        entree: ['burgers', 'hot dogs', 'porkchops'],
        side: ['french friees', 'mashed potatoes', 'mac and cheese'],
        dessert: ['brownies and ice cream', 'banana split', 'coconut pie']
    },
    {
        cuisine: 'mexican',
        entree: ['tacos', 'burritos', 'fajitas'],
        side: ['chips and queso', 'guacamole', 'beans and rice'],
        dessert: ['sopes', 'churros', 'dulce de leche']
    }
];

// console.log(dishes[Math.floor(Math.random() * dishes.length)].cuisine);
// console.log(dishes[Math.floor(Math.random() * dishes.length)].cuisine);

// console.log(`Tonight for dinner we will be having ${dishes[Math.floor(Math.random() * dishes.length)].cuisine}!`);

const getRandomMeal = () => {
    let myCuisine = dishes[Math.floor(Math.random() * dishes.length)].cuisine;
    // console.log(myCuisine);
    if (myCuisine = )
}

getRandomMeal();