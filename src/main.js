import pokemon from './data/pokemon/pokemon.js';

// console.log(data);
// console.log(data.pokemon);
// console.log(pokemon.pokemon[1].name);
// console.log(data)
// document.getElementById(" ")

var mostrarMenu = document.querySelector("#start")

mostrarMenu.addEventListener("click", showMenu)

function showMenu() {
  document.querySelector("#page2").style.display = "block"
  document.querySelector("#page1").style.display = "none"

}

var showType = document.querySelector("#type")
showType.addEventListener("click", typePokemon)

function typePokemon() {
  document.querySelector("#menuType").style.display = "block"
  document.querySelector("#page2").style.display = "none"
}

document.querySelector("#search").addEventListener('click',letterPokemon)

function letterPokemon() {
  document.querySelector("#menu_name").style.display = "block"
  document.querySelector("#page2").style.display = "none"
}

document.querySelector("#attack").addEventListener('click',menuAttack)

function menuAttack(){

document.querySelector("#menu_attack").style.display="block"
document.querySelector("#page2").style.display="none"
}
const pokemonData = pokemon.pokemon;

let type_pokemon = pokemonData.filter(pokemonData => pokemonData.type == "fire"); 

console.log(type_pokemon);


let attack= pokemonData.map(x => x.stats['base-attack']);

console.log(attack);

attack.sort(orderAttack)
function orderAttack(a, b) {
  return a - b
}

console.log(attack)
  

const text = document.querySelector('#searchName');

const search = document.querySelector('#search');

const resultadoPokemon = document.querySelector('#pokemon');

const filtrar = ()=> {

  resultadoPokemon.innerHTML = '';

  const textName = text.value.toLowerCase();

  for (let pokemones of pokemonData) {
    let name = pokemones.name.toLowerCase();
    if (name.indexOf(textName) !== -1) {
      resultadoPokemon.innerHTML += `<h1>${pokemones.name}</h1>`
    }
  }
  if (resultadoPokemon.innerHTML === '') {
    `<h2>Pokemon no encontrado</h2>`
  }
}
search.addEventListener('click', filtrar)

text.addEventListener('keyup', filtrar)
// filtrar();




// //(captura el valor que se ingresa al input)
// document.querySelector("#searchName").addEventListener("change",(event)=>{console.log(event.target.value)})








