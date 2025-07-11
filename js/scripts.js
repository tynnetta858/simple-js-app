let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

   function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }

  // function added to IIFE with parameter pokemon
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemonItem = document.createElement('li');
    // button is inside each li element
    let button = document.createElement('button');
    button.innerText = pokemon.name; 
      // pokemon.name used to get the names of each pokemon
    button.classList.add('style-button');
      // added a class to button with classList to style button in CSS file
    addButtonEventListener(button, pokemon);
      // call the eventListener function after button is appended to DOM
    listPokemonItem.appendChild(button);
      // added button to li list with appendChild
    pokemonList.appendChild(listPokemonItem);
      // added li to ul (main element) with appendChild
    button.addEventListener("click", function(event){
      showDetails(pokemon);
    })
  }

    // when user clicks on pokemon name, showDetails function will show details about that particular pokemon
  function addButtonEventListener(button, pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

 function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
// promise function. Fetch function returns pokemon to console
   function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function(){
    console.log(item);
  });
  }

  // call functions with return
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();

// pokemonRepository.add({name: "Pikachu", height: 0.3, types: ["electric"]})
// // console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

 // forEach loop funcion will run addListItem function over and over again
 
  

 



