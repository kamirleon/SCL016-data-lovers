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

// mostrar tipos
function showType() {
  document.querySelector('#menuType').style.display = 'block'
  document.querySelector('#page2').style.display = 'none'
}
buttonType.addEventListener('click', showType)
// mostrar cartilla de pokemones
// document.querySelector('#search').addEventListener('click',letterPokemon)

// function letterPokemon() {
//   document.querySelector("#menu_name").style.display = "block"
//   document.querySelector("#page2").style.display = "none"
// }

// const buttonArrow= document.getElementById('arrow')

// function arrowReturn() {
//   document.getElementById('menuType').style.display= 'block'
//   document.getElementById('types').style.display= 'none'

// }
// buttonArrow.addEventListener('click', arrowReturn)

const typesPokemon = () => {
  document.querySelector('#types').style.display = 'block'
  document.querySelector('#menuType').style.display = 'none'
}
document.querySelector('#menuType').addEventListener('click', typesPokemon)



// funcion mostar vista de ataque
const menuAttack = () => {
  document.querySelector('#menu_attack').style.display = 'block'
  document.querySelector('#page2').style.display = 'none'
}
document.querySelector('#attack').addEventListener('click', menuAttack)

const pokemonData = pokemon.pokemon;

const buttonP = document.querySelectorAll('.button_p')

buttonP.forEach(e => {
  e.addEventListener('click', event => {

    const buttonP = event.currentTarget.id;
    document.querySelector('#typeTitle').innerHTML = 'Tipo  ' + event.currentTarget.textContent

    const types_pokemons = pokemonData.filter(pokemonData => pokemonData.type.includes(buttonP));
    console.log(types_pokemons)


    for (let i = 0; i < types_pokemons.length; i++) {

      const card = document.createElement('div')
      card.className = 'styleCard'

      let img_poke = document.createElement('img')
      img_poke.src = types_pokemons[i].img
      let infoCard = document.createElement('div')
      let titlePokemon = document.createElement('h2')
      titlePokemon.textContent = types_pokemons[i].name

      let num_poke = document.createElement('h3')
      num_poke.textContent = 'N° ' + types_pokemons[i].num

      infoCard.appendChild(titlePokemon)
      infoCard.appendChild(num_poke)
      card.appendChild(img_poke)
      card.appendChild(infoCard)

      document.querySelector('#cardType').appendChild(card)
    }
  })

});

const attack = pokemonData.sort((a, b) => {
  return b.stats['base-attack'] - a.stats['base-attack'];
})

const viewAttack = document.querySelector('#list_attack');

for (let i = 0; i < attack.length; i++) {
  let card = document.createElement('div')
  card.className = 'attackCard'
  let num_poke = document.createElement('h4')
  num_poke.textContent = 'N° ' + attack[i].num
  let img_attack = document.createElement('img')
  img_attack.src = attack[i].img

  let litleAttack = document.createElement('h2')
  litleAttack.textContent = attack[i].name
  let num_attack = document.createElement('h3')
  num_attack.textContent = 'Base Ataque : ' + attack[i].stats['base-attack']

  card.appendChild(num_poke)
  card.appendChild(img_attack)
  card.appendChild(litleAttack)
  card.appendChild(num_attack)

  viewAttack.appendChild(card)

}
//(captura el valor que se ingresa al input)
document.querySelector('#searchName').addEventListener('keyup', (event) => {

  const listFilter = pokemonData.filter(poke => poke.name.startsWith(event.target.value))
  let list2 = document.getElementById('list_pokemon')
  list2.innerHTML = ''

  if (event.target.value.length === 0 && event.key === 'Backspace') return
  for (let i = 0; i < listFilter.length; i++) {
    let list = document.getElementById('list_pokemon')
    let list_name = document.createElement('li')
    let info = document.createElement('div')
    let name_poke = document.createElement('h2')
    name_poke.textContent = listFilter[i].name
    let num_poke = document.createElement('h3')
    num_poke.textContent = 'N° ' + listFilter[i].num
    // list_name.addEventListener('click', letterPokemon)
    let img_poke = document.createElement('img')
    img_poke.src = listFilter[i].img
    info.appendChild(name_poke)
    info.appendChild(num_poke)
    list_name.appendChild(info)
    list_name.appendChild(img_poke)
    list.appendChild(list_name)
  }
}
)