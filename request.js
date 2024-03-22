
const baseURL = "https://thecocktaildb.com/api/json/v1/1/search.php";

const searchCocktailByName = async (name) => {
    const queryParams = `?s=${name}`;
  
    try { 
      const response = await fetch(baseURL + queryParams); 
      const data = await response.json(); 
      return data; 
    } catch (error) { 
      alert("Hubo un error al consultar la API");
    }
  };

 

  const listCocktailsByFirstLetter = async (letter = "a") => { 

    const queryParams = `?f=${letter}`;
  
    try { 
      const response = await fetch(baseURL + queryParams); 
      const data = await response.json(); 
      return data; //retorno la data
    } catch (error) { //respuesta de fracaso
      alert("Hubo un error al consultar la API");
    }
  };



  const listCocktailsByID = async (id) => { 
    try { 
      const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`); 
      const data = await response.json(); 
      return data; 
    } catch (error) { 
      alert("Hubo un error al consultar la API");
    }
  };




  const randomCocktail = async () => {
    try { 
      const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php"); 
      const data = await response.json();
      return data; 
    } catch (error) { so
      alert("Hubo un error al consultar la API");
    }
  };












