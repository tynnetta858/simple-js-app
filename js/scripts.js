let pokemonList = [
  {name: 'Pikachu', height: 5, types: ['electric', 'flying']},
  {name: 'Squirtle', height: 5, types: ['water']},
  {name: 'Butterfree', height: 11, types: ['bug', 'flying']}
];
//pokemonList is an array of objects, each object represents a pokemon with its name, height, and types.
//object are in curly braces{}
//name, height and types are the properties of the object
//values are located after semicolon for each property


//for loop to print out: Name(height:0.7) in DOM
//<p> is used to create a paragraph in HTML, that way each object is on it's own line
//contional loop to print out pokemons that have a height greater than 10
for (let i=0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  document.writeln(`<p>${pokemon.name} (height:${pokemon.height})` + "</p>");

  if (pokemonList[i].height > 10){
    document.writeln(`<p>${pokemonList[i].name} is very large!` + '</p>');
  }
}




