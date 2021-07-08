const cardPokemons = document.querySelectorAll('.card_pokemon');
/* definindo constante de seleção dos cards de pokemon */
const input = document.getElementById('.nr_pokemon');
/* definindo constante input para receber o valor pelo id do pokemon, nesse caso o numero do pokemon */
let pokemonSelecionado
/* definindo variável, do pokemon selecionado, não constante pois poderá ser alterada a qualquer momento */

/* lógica para seleção de pokemons, ao clicar em alhgum pokemon */
for (const cardPokemon of cardPokemons) {
    cardPokemon.addEventListener('click', function() {
        const cardsSelecionados = document.querySelectorAll('card_pokemon.selecionado');

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
        }
        else {
            this.classList.remove('selecionado');
        }
    })
}

const botaoEscolher = document.getElementById('botao_escolher');
const paginaPokemonSelecionado = document.getElementById('pokemon_selecionado');
botaoEscolher.addEventListener('click', function (){
    if (pokemonSelecionado) {
        const nomePokemon = pokemonSelecionado.getAttribute('data-nome');
        paginaPokemonSelecionado.innerHTML = `Pokémon escolhido: <b>${nomePokemon}</b>`;
    }
    else { 
        paginaPokemonSelecionado.innerHTML = `Nenhum pokémon foi selecionado`;
    }
});