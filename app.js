"use strict";

window.addEventListener("load", initApp);

async function initApp() {
    const pokemonner = await getPokemonner();
    pokemonner.sort(compareDexindex);
    showPokemonner(pokemonner);
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
          closeDialog();
        }
      });
    // pokemonner.forEach(addPokemon);
}

function compareDexindex(pokemonA, pokemonB) {
    return pokemonA.dexindex - pokemonB.dexindex;
}

async function getPokemonner(){
    const response = await fetch(`https://cederdorff.github.io/dat-js/05-data/pokemons.json`)
    const data = await response.json();
    return data;
}

function showPokemonner(pokemonList) {
    for (const pokemon of pokemonList) {
        showPokemon(pokemon);
    }
}

function showPokemon(pokemon) {
    let myHTML = /*html*/ 
    `<article id="pokemon-container">
        <img src=${pokemon.image}>
        <b>${pokemon.name}</b> 
        <b>-</b> 
        <b>#${pokemon.dexindex}</b><br>
    </article>
    `;
    
    document.querySelector("#pokemonner").insertAdjacentHTML("beforeend", myHTML);
    document.querySelector("#pokemonner article:last-child").addEventListener("click", pokemonClicked);

    function pokemonClicked() {
        let pokemonDexInfo = /*html*/ ` 
    <article id=pokemon-info-list>
        <img src=${pokemon.image}>
        <li><b>Name:</b> ${pokemon.name}</li>
        <li><b>Description:</b> ${pokemon.description}</li>
        <li><b>Pokédex index:</b> ${pokemon.dexindex}</li>
        <li><b>Type:</b> ${pokemon.type}</li>
        <li><b>Subtype: </b>${pokemon.subtype}</li>
        <li><b>Gender:</b> ${pokemon.gender}</li>
        <li><b>Weight:</b> ${pokemon.weight} g</li>
        <li><b>Height:</b> ${pokemon.height} m</li>
        <li><b>Generation:</b> ${pokemon.generation}</li>
        <li><b>Can evolve:</b> ${pokemon.canEvolve}</li>
        <li><b>Ability: </b>${pokemon.ability}</li>
        <li><b>HP:</b> ${pokemon.statsHP}</li>
        <li><b>Attack:</b> ${pokemon.statsAttack}</li>
        <li><b>Defence:</b> ${pokemon.statsDefence}</li>
        <li><b>Special Attack:</b> ${pokemon.statsSpecialAttack}</li>
        <li><b>Special Defence:</b> ${pokemon.statsSpecialDefence}</li>
        <li><b>Speed:</b> ${pokemon.statsSpeed}</li>
        <img id=footprint src=${pokemon.footprint}><br>
        <button id="detailed-info-btn">Close</button>
     </article>   
    `;

    document.querySelector("#dialog-pokemon-info").insertAdjacentHTML("beforeend", pokemonDexInfo);

    document.querySelector("#dialog-pokemon-info").showModal(pokemon);
    document.querySelector("#dialog-pokemon-info").scrollTop = 0;
    document.querySelector("#detailed-info-btn").addEventListener("click", closeDialog);
    }
}

function closeDialog() {
    document.querySelector("#dialog-pokemon-info").close();
    document.querySelector("#pokemon-info-list").remove();
  }