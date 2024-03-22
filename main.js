const randomCocktailContainer = document.querySelector(
  ".random-cocktail-container"
);
const cocktailsContainer = document.querySelector(".cocktails-container");
const form = document.getElementById("form");
const cocktailInputByName = document.getElementById("ByName");
const listLetters = document.querySelectorAll(".letter");
const byFirstLetter = document.querySelector("#ByFirstLetter");


const infoCocktailContainer = document.querySelector(".info-cocktail-container");
const overlay = document.querySelector(".overlay");

let selecteSearch = "";

const getRandomCocktailCardHtml = ({strDrink, strDrinkThumb, idDrink}) => {  
return `
    <div class="random-card-container">
    <h3 class="card-title">${strDrink}</h3>
    <img src="${strDrinkThumb}" alt="${strDrink}" class="card-img">
    <button class="btn-card" data-id="${idDrink}" >
        Look
    </button>
</div>
      `; 
};

const renderRandomCocktail = (cocktail) => {
  randomCocktailContainer.innerHTML = cocktail
    .map((cocktail) => getRandomCocktailCardHtml(cocktail))
    
};

const getRandomCocktail = async () => {
  // llamar a la API
  const cocktail = await randomCocktail();
  const cocktailList = await listCocktailsByFirstLetter();
  // renderizar las cards
  renderRandomCocktail(cocktail.drinks);
  renderCocktails(cocktailList.drinks);
};

const getCocktailCardHtml = ({strDrink, strDrinkThumb, idDrink}) => {
  return `
    <div class="card-container">
    <img src="${strDrinkThumb}" alt="${strDrink}" class="card-img">
    <h3 class="card-title">${strDrink}</h3>
    <button class="btn-card" data-id="${idDrink}" >
        Look
    </button>
    </div>
      `;
};

const renderCocktails = (cocktail) => {
  cocktailsContainer.innerHTML = cocktail
    .map((cocktail) => getCocktailCardHtml(cocktail))
    .join("");
};



const getCocktail = async (e) => {
  e.preventDefault();
    const searchedCocktail = cocktailInputByName.value.trim(); 
    if (searchedCocktail === "") {
      alert("Por favor ingrese un cocktail!");
      return;
    }
    const cocktail = await searchCocktailByName(searchedCocktail);
    renderCocktails(cocktail.drinks);
}; 

const getCocktailByFirstLetter = async (e) => {
  if (
    !e.target.classList.contains("letter") ||
    e.target.classList.contains("letter--active")
  )
    return;
  const selecteLetter = e.target.dataset.letter; 
  const letters = [...listLetters]; 
  letters.forEach((btn) => {
    if (btn.dataset.letter !== selecteLetter) {
      btn.classList.remove("letter--active");
    } else {
      btn.classList.add("letter--active");
    }
  });
  const cocktail = await listCocktailsByFirstLetter(selecteLetter);
  renderCocktails(cocktail.drinks);
};

const getCocktailInfoCardHtml = ({
  strDrink,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
  strIngredient11,
  strIngredient12,
  strIngredient13,
  strIngredient14,
  strIngredient15,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
  strMeasure8,
  strMeasure9,
  strMeasure10,
  strMeasure11,
  strMeasure12,
  strMeasure13,
  strMeasure14,
  strMeasure15,
  strInstructions,

}) => {
  if(strIngredient1===null){
    strIngredient1=""
    strMeasure1="";
  }
  if(strIngredient2===null){
    strIngredient2=""
    strMeasure2="";
  }
  if(strIngredient3===null){
    strIngredient3=""
    strMeasure3="";
  }
  if(strIngredient4===null){
    strIngredient4=""
    strMeasure4="";
  }
  if(strIngredient5===null){
    strIngredient5=""
    strMeasure5="";
  }
  if(strIngredient6===null){
    strIngredient6=""
    strMeasure6="";
  }
  if(strIngredient7===null){
    strIngredient7=""
    strMeasure7="";
  }
  if(strIngredient8===null){
    strIngredient8=""
    strMeasure8="";
  }
  if(strIngredient9===null){
    strIngredient9=""
    strMeasure9="";
  }
  if(strIngredient10===null){
    strIngredient10=""
    strMeasure10="";
  }
  if(strIngredient11===null){
    strIngredient11=""
    strMeasure11="";
  }
  if(strIngredient12===null){
    strIngredient12=""
    strMeasure12="";
  }
  if(strIngredient13===null){
    strIngredient13=""
    strMeasure13="";
  }
  if(strIngredient14===null){
    strIngredient14=""
    strMeasure14="";
  }
  if(strIngredient15===null){
    strIngredient15=""
    strMeasure15="";
  }

  return `
  <div class="card-info-cocktail-container">
  <h3>${strDrink} </h3>
  <img src="${strDrinkThumb}" alt="${strDrink}" class="card-img">
  <h4>Instructions:</h4>
  <p>${strInstructions}</p>
  <h4>Ingredients:</h4>
  <ul>
    <li>${strIngredient1}  ${strMeasure1}</li>
    <li>${strIngredient2}  ${strMeasure2}</li>
    <li>${strIngredient3}  ${strMeasure3}</li>
    <li>${strIngredient4}  ${strMeasure4}</li>
    <li>${strIngredient5}  ${strMeasure5}</li>
    <li>${strIngredient6}  ${strMeasure6}</li>
    <li>${strIngredient7}  ${strMeasure7}</li>
    <li>${strIngredient8}  ${strMeasure8}</li>
    <li>${strIngredient9}  ${strMeasure9}</li>
    <li>${strIngredient10}  ${strMeasure10}</li>
    <li>${strIngredient11}  ${strMeasure11}</li>
    <li>${strIngredient12}  ${strMeasure12}</li>
    <li>${strIngredient13}  ${strMeasure13}</li>
    <li>${strIngredient14}  ${strMeasure14}</li>
    <li>${strIngredient15}  ${strMeasure15}</li>
  </ul>
</div>
  `;
};

const renderCocktailInfo = (cocktail) => {
  infoCocktailContainer.innerHTML = cocktail
    .map((cocktail) => getCocktailInfoCardHtml(cocktail))
};

const cocktailInfo = async (e) => {
  if (!e.target.classList.contains("btn-card")) return; 
  const id = e.target.dataset.id 
  const cocktail = await listCocktailsByID(id);
  renderCocktailInfo (cocktail.drinks)
  infoCocktailContainer.classList.toggle("open-cocktail");
  overlay.classList.toggle("show-overlay");
};

const closeOnOverlayClick = () => {
  infoCocktailContainer.classList.remove("open-cocktail");
  overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
  if (!infoCocktailContainer.classList.contains("open-cocktail") ) return;
  infoCocktailContainer.classList.remove("open-cocktail");
  overlay.classList.remove("show-overlay");
};

const init = () => {
  window.addEventListener("DOMContentLoaded", getRandomCocktail); 
  form.addEventListener("submit", getCocktail);
  byFirstLetter.addEventListener("click", getCocktailByFirstLetter);
  cocktailsContainer.addEventListener("click", cocktailInfo);
  randomCocktailContainer.addEventListener("click", cocktailInfo);
  overlay.addEventListener("click", closeOnOverlayClick);
  window.addEventListener("scroll", closeOnScroll);
};

init();
