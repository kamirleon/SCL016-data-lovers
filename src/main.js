import pokemon from './data/pokemon/pokemon.js';

const mostrarMenu = document.querySelector("#start")

 mostrarMenu.addEventListener("click", showMenu)

 function showMenu() {
  document.querySelector("#page2").style.display = "block"
  document.querySelector("#page1").style.display = "none"

}

 const showType = document.querySelector("#type")
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
document.querySelector('#menuType').addEventListener('click', typesPokemon)

function typesPokemon(){
  document.querySelector('#types').style.display='block'
  document.querySelector('#menuType').style.display='none'
}
const pokemonData=pokemon.pokemon;

document.getElementById("button_water").addEventListener("click",()=>{
// //paso uno: filtrar informacion
 const buttonType= document.getElementById("menuType");


 const type_pokemonWater = pokemonData.filter(pokemonData => pokemonData.type.includes("water"));
//paso 2:pintar esa informacion filtrada 
 
 for(let i=0;i<type_pokemonWater.length;i++){
   let titlePokemon=document.createElement("h1")
   titlePokemon.textContent=type_pokemonWater[i].name
   let list= document.getElementById("types")
   list.appendChild(titlePokemon)

   console.log(type_pokemonWater[i].name);
 }
 });

let attack= pokemonData.map(x => x.stats['base-attack']);

console.log(attack);

attack.sort(orderAttack)
function orderAttack(a, b) {
  return b - a
};
// console.log(attack)