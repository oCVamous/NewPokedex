const url = 'https://pokeapi.co/api/v2/pokemon/';
let allPokemon = [];

function init() {
    loadAllPokemon();
    
}

async function loadAllPokemon() {
    document.getElementById('content').innerHTML += '';

    for (let i = 0; i < 20; i++) {
        const pokemon_url = url + (i + 1);
        let response = await fetch(pokemon_url);
        let currentPokemonAsJSON = await response.json();
        allPokemon.push(currentPokemonAsJSON);
        
        renderPokemonCards(i);
        fillCardsWithPokemonData(i);
    }

    console.log('Loaded pokemon', allPokemon); 
}


function renderPokemonCards(i) {
    document.getElementById('content').innerHTML += templateCreateSmallCard(i);
}

function fillCardsWithPokemonData(i){
    document.getElementById('pokemon-name-' + i).innerHTML = allPokemon[i]['name'];
    document.getElementById('pokemon-name-' + i).innerHTML = allPokemon[i]['name'];
    document.getElementById('pokemon-id-' + i).innerHTML += allPokemon[i]['id'];
    document.getElementById('pokemon-img-' + i).src = allPokemon[i]['sprites']['other']['dream_world']['front_default'];
}