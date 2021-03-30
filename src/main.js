import data from './data/pokemon/pokemon.js';

// console.log(data);
// console.log(data.pokemon)
// console.log(data.pokemon[1].name)
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



