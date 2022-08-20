const url = 'https://pokeapi.co/api/v2/pokemon/';

function init() {
    loadAllPokemons();
    render();
}

async function loadAllPokemons() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    let response = await fetch(url);
    let responseAsJSON = await response.json();

    console.log('Loaded pokemon', responseAsJSON);
}

function render() {
    
}