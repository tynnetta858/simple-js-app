let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'Pikachu', height: 5, types: ['electric', 'flying']},
    {name: 'Squirtle', height: 5, types: ['water']},
    {name: 'Butterfree', height: 11, types: ['bug', 'flying']}
  ];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

  return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.writeln(`<p>${pokemon.name} (height:${pokemon.height})</p>`);
  if (pokemon.height > 10) {
    document.writeln(`<p>${pokemon.name} is very large!</p>`);
  }
});








