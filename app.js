"use strict";

window.addEventListener("load", initApp);

async function initApp() {
    const pokemonner = await getPokemonner();
    showPokemonner(pokemonner);
    // pokemonner.forEach(addPokemon);
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
    `<article class="grid-item">
        <img src="${pokemon.image}">
        <h2>${pokemon.name}</h2>
        <p>${pokemon.dexindex}</p>
    </article>
    `;
    
    document.querySelector("#pokemonner article:last-child").addEventListener("click", pokemonClicked);

    function pokemonClicked() {
        showPokemonModal(pokemon);
    }
}

function showPokemonModal(pokemon) {
}



function showPokemon(pokemon) {
    let myHTML = /*html*/`
    <li>Name: ${pokemon.name}</li>
    <li> <img src="${pokemon.image}"> </li>
    <li>Ability: ${pokemon.ability}</li>
    <li>Footprint: <img src="${pokemon.footprint}"></li>
    <li>Pokedex: ${pokemon.dexindex}</li>
    <li>Type: ${pokemon.type}</li>
    <li>Subtype: ${pokemon.subtype}</li>
    <li>Weakness: ${pokemon.weakness}</li>
    <li>Gender: ${pokemon.gender}</li>
    <li>Weight: ${pokemon.weight}</li>
    <li>Height: ${pokemon.height}</li>
    <li>Generation: ${pokemon.generation}</li>
    <li>Spil Version: ${pokemon.spilversion}</li>
    <li>Can Evolve: ${pokemon.canEvolve}</li>
    <li>Stats HP: ${pokemon.statsHP}</li>
    <li>Stats Attack: ${pokemon.statsAttack}</li>
    <li>Stats Defense: ${pokemon.statsDefence}</li>
    <li>Stats Special Attack: ${pokemon.statsSpecialAttack}</li>
    <li>Stats Special Defense: ${pokemon.statsSpecialDefense}</li>
    <li>Stats Speed: ${pokemon.statsSpeed}</li>
    <br>
    `
    document.querySelector("#pokemonner").insertAdjacentHTML("beforeend", myHTML);
}

