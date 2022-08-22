function init() {
    loadAllPokemon();
}

async function loadAllPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    let response = await fetch(url);
    let responseAsJSON = await response.json();

    console.log('Loaded pokemon', responseAsJSON);
}