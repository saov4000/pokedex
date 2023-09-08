const urlParams = new URLSearchParams(window.location.search);
const num = urlParams.get('num');

function headerParaHTML(pokemon){
    const types = pokemon.types.map((typeSlot)=> typeSlot.type.name)
    const [typecor] = types
    return `<div class="pokemon ${typecor}">
                <div class="title">
                    <div class="nome">${pokemon.name}</div>
                    <div class="subt">
                        <div class="left">
                            <ol id="types">
                                ${pokemon.types.map((typeSlot)=>`<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`).join('')}
                            </ol>
                        </div>
                        <div class="right">
                            <span id="ident">#${pokemon.id}</span>
                        </div>
                    </div>
                </div>
                <div class="image">
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </div>     
            </div>`
}

function detalhesParaHTML(detalhe){
    return `<li class=detalhe>
            <span>${detalhe.stat.name}</span> 
            <span>${detalhe.base_stat}</span>
            <progress max="100" value="${detalhe.base_stat}"></progress>
    </li>`
}

function loadHeader(num){
    pokeAPI.getOnePokemon(num)
    .then((pokemon)=>document.getElementById('head').innerHTML = headerParaHTML(pokemon))
}

function loadDetalhes(num){
    pokeAPI.getDetails(num)
    .then((lista = [])=>{
        document.getElementById('dados').innerHTML = lista.map(detalhesParaHTML).join('')
    })
}

loadHeader(num)
loadDetalhes(num)

