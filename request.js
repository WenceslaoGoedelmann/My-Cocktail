
const baseURL = "https://thecocktaildb.com/api/json/v1/1/search.php";

const searchCocktailByName = async (name) => { //como va a ser una funcion asincrona, antes de los parametros le tengo que agregar async

    const queryParams = `?s=${name}`;
  
    try { // respuesta de exito
      const response = await fetch(baseURL + queryParams); // esta promesa nos devuelve un objeto de tipo "ReadableStream" por lo cual lo debo pasar a un objeto de tipo JSON
      const data = await response.json(); //lo paso a formato JSON
      console.log(data, "ByName");
      return data; //retorno la data
    } catch (error) { //respuesta de fracaso
      alert("Hubo un error al consultar la API");
    }
  };

  //searchCocktailByName('mojito')

  const listCocktailsByFirstLetter = async (letter = "a") => { //como va a ser una funcion asincrona, antes de los parametros le tengo que agregar async

    const queryParams = `?f=${letter}`;
  
    try { // respuesta de exito
      const response = await fetch(baseURL + queryParams); // esta promesa nos devuelve un objeto de tipo "ReadableStream" por lo cual lo debo pasar a un objeto de tipo JSON
      const data = await response.json(); //lo paso a formato JSON
      console.log(data, "ByFirstLetter");
      return data; //retorno la data
    } catch (error) { //respuesta de fracaso
      alert("Hubo un error al consultar la API");
    }
  };

  //listCocktailsByFirstLetter("a")

  const listCocktailsByID = async (id) => { //como va a ser una funcion asincrona, antes de los parametros le tengo que agregar async
  
    try { // respuesta de exito
      const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`); // esta promesa nos devuelve un objeto de tipo "ReadableStream" por lo cual lo debo pasar a un objeto de tipo JSON
      const data = await response.json(); //lo paso a formato JSON
      console.log(data, "ByID");
      return data; //retorno la data
    } catch (error) { //respuesta de fracaso
      alert("Hubo un error al consultar la API");
    }
  };

  //listCocktailsByID("16998")


  const randomCocktail = async () => { //como va a ser una funcion asincrona, antes de los parametros le tengo que agregar async

    try { // respuesta de exito
      const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php"); // esta promesa nos devuelve un objeto de tipo "ReadableStream" por lo cual lo debo pasar a un objeto de tipo JSON
      const data = await response.json(); //lo paso a formato JSON
      console.log("data",data);
      return data; //retorno la data
    } catch (error) { //respuesta de fracaso
      alert("Hubo un error al consultar la API");
    }
  };

  //randomCocktail()










