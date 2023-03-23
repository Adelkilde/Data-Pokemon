"use strict";

// window.addEventListener("load", initApp);

// // async function initApp() {
// //     const data = await addPokemon("https://raw.githubusercontent.com/Adelkilde/Data-Pokemon/main/mew.json")

// // }

const mew = {
    name: "Mew",
    image: "images/Mew.png",
    ability: "Synchronize",
    description: "Placeholder",
    footprint: "images/F0151.png",
    dexindex: `#0151`,
    type: "Psychich",
    subtype: null,
    weaknesses: "Ghost, Dark, Bug",
    gender: "Gender unknown",
    weight: `4.0 kg`,
    height: `0.4 m`,
    generation: 1,
    spilversion: undefined,
    canEvolve: false,
    statsHP: 100,
    statsAttack: 100,
    statsDefence: 100,
    statsSpecialAttack: 100,
    statsSpecialDefense: 100,
    statsSpeed: 100,
}

function addPokemon(pokemon) {
    const myHTML = /*html*/`
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
    document.querySelector("#pokemans").insertAdjacentHTML("beforeend", myHTML);
}
addPokemon(mew);