let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'Pikachu', height: 5, types: ['electric', 'flying']},
    {name: 'Squirtle', height: 5, types: ['water']},
    {name: 'Butterfree', height: 11, types: ['bug', 'flying']}
  ];

  function getAll() {
    return pokemonList;
  }

  // function added to IIFE with parameter pokemon
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemonItem = document.createElement('li');
    // button is inside each li element
    let button = document.createElement('button');

    // pokemon.name used to get the names of each pokemon
    button.innerText = pokemon.name; 
    // added a class to button with classList to style button in CSS file
    button.classList.add('style-button');

      // call the eventListener function after button is appended to DOM
    addButtonEventListener(button, pokemon);

    // added button to li list with appendChild
    listPokemonItem.appendChild(button);
    // added li to ul (main element) with appendChild
    pokemonList.appendChild(listPokemonItem);
  }

    // when user clicks on pokemon name, showDetails function will show details about that particular pokemon
  function addButtonEventListener(button, pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(`pokemon: ${pokemon.name}`);
    console.log(`height: ${pokemon.height}`);
    console.log(`types: ${pokemon.types.join(', ')}`);
  }

  function add(item) {
    pokemonList.push(item);
  }

  // call functions with return
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  // forEach loop function will run addListItem function over and over again
});



 
  

 



