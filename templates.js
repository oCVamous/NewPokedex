function templateCreateSmallCard(i) {
    return /*html*/`
    <div id="pokedex-${i}" class="pokedex">
        <div id="one">
            <h2 id="pokemon-name-${i}" class="pokemon-name"></h2>
            <h2 id="pokemon-id-${i}" class="pokemon-id">#</h2>
            <div id="pokemon-attribut-${i}" class="pokemon-attribut-container">Test</div>
        </div>
        <div id="two">
            <img id="pokemon-img-${i}" class="pokemon-img">
        </div>
        <div id="three">
            <img src="img/half-heart.ico" style="height: 30px;">
        </div>
    </div>
    `;







    /**
     * return /*html*/`
    <div id="pokedex-${i}" class="pokedex bg-${allPokemon[i]['types'][0]['type']['name']}" onclick="renderBigPokemonCard(${i})">
    <div id="one">
        <h2 id="pokemon-name-${i}" class="pokemon-name"></h2>
        <h2 id="pokemon-id-${i}" class="pokemon-id">#</h2>
        <div id="pokemon-attribut-${i}" class="pokemon-attribut-container"></div>
    </div>
    <div id="two">
        <img id="pokemon-img-${i}" class="pokemon-img">
    </div>
    <div id="three" onclick="event.stopPropagation()">
        <img onclick="saveFavoritePokemon(${i})" id="like-img-${i}" style="height:35px"; src="img/favorite-3-128.ico" alt="">
    </div>
</div>
     * 
     * 
     * 
     * 
     * 
     */
    
    `;
}