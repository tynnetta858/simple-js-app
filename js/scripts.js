let pokemonList = [
  {name: 'Pikachu', height: 5, types: ['electric', 'flying']},
  {name: 'Squirtle', height: 5, types: ['water']},
  {name: 'Butterfree', height: 11, types: ['bug', 'flying']}
];
//pokemonList is an array of objects, each object represents a pokemon with its name, height, and types.
//object are in curly braces{}
//name, height and types are the properties of the object
//values are located after semicolon for each property

for (let i=0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  document.writeln(`${pokemon.name} (height:${pokemon.height})` + "</p>");
}

//Name(height:0.7)