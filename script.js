const findFood = () => {
    const search = document.getElementById('searchBar').value;
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`

    fetch(url)
        .then(res => res.json())
        .then(data => ShowFoods(data.categories))
}
const ShowFoods = food => {
    const foodCorner = document.getElementById('food-corner');

    food.forEach(foods => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'col card-size';
        foodDiv.innerHTML = `<div class="col card-size">
        <div class="card h-100">
        <img src="${foods.strCategoryThumb}" class="card-img-top image" alt="..."></img>
        <div class="card-body">
        <button onclick="getIngredients('${foods.detailsdetails}')" class="card-title button">${foods.strCategory}</button>
        </div>  </div>
        </div>`
        foodCorner.appendChild(foodDiv);
    });
}
const getIngredients = details => {
c
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
    fetch(url)
        .then(res => res.json())
        .then(data => showIngredients(data.meals))
    
}
const showIngredients = ingredients => {
    const ingredientDiv = document.getElementById('ingredients');
    ingredientDiv.innerHTML = `
    <h3>${ingredients.details}</h3>
    <li>${ingredients.strInstructions}</li>
    `
   
}

