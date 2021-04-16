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

document.querySelector('#menuType').addEventListener('click', typesPokemon)

function typesPokemon(){
  document.querySelector('#types').style.display='block'
  document.querySelector('#menuType').style.display='none'
}
// captura boton ataque y evento que muestra vista de ataque
document.querySelector('#attack').addEventListener('click', menuAttack)

// funcion mostar vista de ataque
function menuAttack() {
    document.querySelector('#menu_attack').style.display = 'block'
  document.querySelector('#page2').style.display = 'none'
}

//(captura el valor que se ingresa al input)
document.querySelector("#searchName").addEventListener("keyup", (event) => {

  const listaFiltrada = pokemonData.filter(poke => poke.name.startsWith(event.target.value))
  let list2 = document.getElementById("list_pokemon")
  list2.innerHTML = ''

 // console.log(listaFiltrada)

  for (let i = 0; i < listaFiltrada.length; i++) {
    let list = document.getElementById("list_pokemon")
    let list_name = document.createElement("li")
    list_name.textContent = listaFiltrada[i].name
    let num_poke = document.createElement("h4")
    num_poke.textContent = listaFiltrada[i].num
    // list_name.addEventListener('click', letterPokemon)
    let img_poke = document.createElement("img")
    img_poke.src = listaFiltrada[i].img
    list_name.appendChild(img_poke)
    list_name.appendChild(num_poke)
    list.appendChild(list_name)
   
  }
}
);