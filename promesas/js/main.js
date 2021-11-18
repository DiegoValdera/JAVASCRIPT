

async function main(){
    function createPokemon(pokemons){
        pokemons.results.map(async (pokemon)=>{
            const response = await fetch(pokemon.url);
            const pokemonDetall = await response.json();

            let article = document.createElement('article');
            article.innerHTML = `
                <figure>
                    <img src=${pokemonDetall.sprites.front_default} alt=${pokemonDetall.name}>
                </figure>
                ${pokemonDetall.name}
            `;

            document.querySelector('#container').appendChild(article);
        });
    }

        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((resolve) => {
            return resolve.json();
        })
        .then((pokemon) => {
            createPokemon(pokemon);
        })
        .catch((err) => {
            console.log('error en promesa', err);
        });

}
main();