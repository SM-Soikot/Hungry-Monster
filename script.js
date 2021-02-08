fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => food(data))

const food = ingredients => {
 for(let i = 0; i < ingredients.length; i++){
     const ingredient = ingredients [i];
     console.log(ingredient.name)
 }
}