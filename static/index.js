const cardPokemons = document.querySelectorAll('.card_pokemon');
const input = document.getElementById('nr_pokemon');

let pokemonSelecionado;

for (const cardPokemon of cardPokemons) {
    cardPokemon.addEventListener('click', function () {
       
        const cardsSelecionados = document.querySelectorAll('.card_pokemon.selecionado');

        if (cardsSelecionados.length > 0) {
            for (const cardSelecionado of cardsSelecionados) {
                cardSelecionado.classList.remove('selecionado');
            }
        }
        if (!this.classList.contains('selecionado')) {
			this.classList.add('selecionado');
			
            pokemonSelecionado = this;
			const nrPokemon = pokemonSelecionado.getAttribute('data-numero');
			nr_pokemon.value = nrPokemon;
        } else {
            this.classList.remove('selecionado');
        }
    })
}
const botaoEscolher = document.getElementById('botao_escolher');
const blocoPokemonSelecionado = document.getElementById('pokemon_selecionado');
botaoEscolher.addEventListener('click', function () {
    if (pokemonSelecionado) {
        const nomePokemon = pokemonSelecionado.getAttribute('data-nome');
        blocoPokemonSelecionado.innerHTML = `Pokémon escolhido: <b>${nomePokemon}</b>`;
		
    } else {
        blocoPokemonSelecionado.innerHTML = `Nenhum pokémon foi selecionado`;
    }
});
