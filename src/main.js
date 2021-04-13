import pokemon from './data/pokemon/pokemon.js';
// captura boton pokebola
const buttonMenu = document.querySelector('#start')
// evento para pasar a vista menu
buttonMenu.addEventListener('click', showMenu)
// mostar menu
function showMenu() {
  document.querySelector('#page2').style.display = 'block'
  document.querySelector('#page1').style.display = 'none'
}
// captura boton tipo
const buttonType = document.querySelector('#type')
// evento para mostrar vista de tipos
buttonType.addEventListener('click', showType)
// mostrar tipos
function showType() {
  document.querySelector('#menuType').style.display = 'block'
  document.querySelector('#page2').style.display = 'none'
}
// mostrar cartilla de pokemones
// document.querySelector('#search').addEventListener('click',letterPokemon)

// function letterPokemon() {
//   document.querySelector("#menu_name").style.display = "block"
//   document.querySelector("#page2").style.display = "none"
// }

// captura boton ataque y evento que muestra vista de ataque
document.querySelector('#attack').addEventListener('click', menuAttack)

// funcion mostar vista de ataque
function menuAttack() {

  document.querySelector('#menu_attack').style.display = 'block'
  document.querySelector('#page2').style.display = 'none'
}

const pokemonData = pokemon.pokemon;

// let attack= pokemonData.map(x => x.stats['base-attack']);
// console.log(attack);
// 
// attack.sort(orderAttack)
// function orderAttack(a, b) {
//   return b - a
// }
// console.log(attack);

// //(captura el valor que se ingresa al input)
document.querySelector("#searchName").addEventListener("keyup", (event) => {

  const listaFiltrada = pokemonData.filter(poke => poke.name.startsWith(event.target.value))
  let list2 = document.getElementById("list_pokemon")
  list2.innerHTML = ''

 // console.log(listaFiltrada)

  for (let i = 0; i < listaFiltrada.length; i++) {
    let list_name = document.createElement("h2")
    list_name.textContent = listaFiltrada[i].name
    // list_name.addEventListener('click', letterPokemon)
    let list = document.getElementById("list_pokemon")
    let img_poke = document.createElement("img")
    img_poke.src = listaFiltrada[i].img

    list.appendChild(list_name)
    list.appendChild(img_poke)

    //console.log(listaFiltrada[i].name);
  }
}
);