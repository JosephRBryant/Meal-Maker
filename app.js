let dishes = [
    {
        cuisine: 'italian',
        entree: [  "Spaghetti alla Carbonara",  "Lasagne alla Bolognese",  "Pizza Margherita",  "Risotto alla Milanese",  "Osso Buco alla Milanese",  "Polenta con Salsiccia",  "Gnocchi alla Sorrentina",  "Saltimbocca alla Romana",  "Cotoletta alla Milanese",  "Tortellini in Brodo",  "Caprese Salad",  "Bruschetta",  "Minestrone Soup",  "Panzanella Salad",  "Arancini di Riso",  "Involtini alla Parmigiana",  "Cannelloni alla Fiorentina"],
        side: [  "Caprese Salad",   "Bruschetta",  "Parmesan Roasted Potatoes",  "Garlic Bread",  "Grilled Vegetables",  "Minestrone Soup",  "Arancini",   "Marinated Olives",  "Roasted Tomatoes",  "Sautéed Mushrooms",  "Antipasto Platter",  "Focaccia Bread",  "Polenta",  "Spinach and Ricotta Stuffed Tomatoes",  "Zucchini Fritters",  "Eggplant Caponata",  "Baked Artichokes",  "Risotto",  "Pesto Pasta Salad",  "Prosciutto and Melon"  ],
        dessert: [  "Tiramisu",  "Panna Cotta",  "Cannoli",  "Zabaglione",  "Biscotti",  "Affogato",  "Amaretti",  "Gelato",  "Semifreddo",  "Torrone",  "Ricotta cheesecake",  "Struffoli",  "Sfogliatelle",  "Ciambelline al vino",  "Crostata di frutta",  "Torta Caprese",  "Bigne",  "Zuccotto",  "Panettone",  "Pandoro"]
    },
    {
        cuisine: 'mexican',
        entree: [  "Tacos al Pastor",  "Enchiladas",  "Tamales",  "Chiles Rellenos",  "Quesadillas",  "Pozole",  "Fajitas",  "Burritos",  "Carnitas",  "Chimichangas",  "Carne Asada",  "Chilaquiles",  "Sopes",  "Huevos Rancheros",  "Barbacoa",  "Flautas",  "Cochinita Pibil",  "Pollo en Mole",  "Camarones al Ajillo",  "Sizzling Fajitas"],
        side: [  "Refried Beans",  "Mexican Rice",  "Guacamole",  "Salsa",  "Queso Blanco",  "Pico de Gallo",  "Grilled Corn",  "Ceviche",  "Coleslaw",  "Charro Beans",  "Chips and Salsa",  "Avocado Salad",  "Nopales Salad",  "Tostones",  "Grilled Peppers and Onions",  "Mexican Street Corn Salad",  "Mexican Caesar Salad",  "Cheese Enchiladas",  "Tamales",  "Chiles Rellenos"],
        dessert: ["Tres Leches Cake", "Churros", "Flan", "Arroz con Leche", "Cajeta", "Bunuelos", "Champurrado", "Cinnamon Sugar Tortilla Chips", "Mexican Wedding Cookies", "Conchas", "Empanadas de Cajeta", "Buñuelos de Viento", "Pan de Muerto", "Mazapán", "Glorias", "Alegrías", "Obleas", "Cocadas", "Chongos Zamoranos", "Camotes Enmielados"]
    },
    {
        cuisine: 'american',
        entree: [   "Cheeseburger",   "Grilled chicken sandwich",   "New York-style pizza",   "Fried chicken",   "BBQ ribs",   "Macaroni and cheese",   "Lobster roll",   "Philly cheesesteak",   "Fried catfish",   "Shrimp and grits",   "Buffalo wings",   "Beef brisket",   "Clam chowder",   "Chicken and waffles",   "Chicago-style hot dog",   "Pulled pork sandwich",   "Chili con carne",   "Meatloaf",   "Jambalaya",   "Caesar salad with grilled chicken"],
        side: [   "macaroni and cheese",   "mashed potatoes",   "coleslaw",   "potato salad",   "green bean casserole",   "corn on the cob",   "baked beans",   "cornbread",   "collard greens",   "sweet potato casserole",   "deviled eggs",   "hush puppies",   "garlic bread",   "stuffing",   "cranberry sauce",   "roasted vegetables",   "fried okra",   "creamed spinach",   "roasted potatoes",   "garlic mashed potatoes"],
        dessert: [  "apple pie",  "brownies",  "carrot cake",  "cheesecake",  "chocolate chip cookies",  "cinnamon rolls",  "coconut cream pie",  "devils food cake",  "key lime pie",  "lemon bars",  "peach cobbler",  "pecan pie",  "pumpkin pie",  "red velvet cake",  "s'mores",  "strawberry shortcake",  "sweet potato pie",  "vanilla ice cream",  "banana pudding",  "blueberry cobbler"]
    }
];

const getRandomMeal = () => {
    const myMeal = document.getElementById('my-meal');

    const randomCuisine = dishes[Math.floor(Math.random() * dishes.length)];
    const randomEntree = randomCuisine.entree[Math.floor(Math.random() * randomCuisine.entree.length)];
    const randomSide = randomCuisine.side[Math.floor(Math.random() * randomCuisine.side.length)];
    const randomDessert = randomCuisine.dessert[Math.floor(Math.random() * randomCuisine.dessert.length)];    
    console.log(`For dinner tonight we will have ${randomEntree.toLowerCase()} with a side of ${randomSide.toLowerCase()} and ${randomDessert.toLowerCase()} for dessert. Bon Apetite!`)
    myMeal.innerHTML = `For dinner tonight we will have <span>${randomEntree.toLowerCase()}</span> with a side of <span>${randomSide.toLowerCase()}</span> and <span>${randomDessert.toLowerCase()}</span> for dessert. Bon Apetite!`
};
