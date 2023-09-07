const loadmorebtn = document.getElementById('loadmore')
const limit = 8
let offset = 0
const maxRecords = 151

function paraHTML(pokemon){
    return `<a href="detalhes.html?num=${pokemon.id}"><li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail"> 
            <ol class="types">
               ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
    </li></a>`
}

function loadPokemonItems(offset,limit){
    pokeAPI.getPokemons(offset,limit).then((pokemons =[]) => 
    document.getElementById('pokemonlist').innerHTML += pokemons.map(paraHTML).join(''))
}

loadPokemonItems(offset,limit)

loadmorebtn.addEventListener('click',()=>{
    offset += limit
    const qtdeRecord = offset + limit
    if(qtdeRecord >= maxRecords){
        const newLimit = qtdeRecordNextPage - maxRecords 
        loadPokemonItems(offset,limit)
        loadmorebtn.parentElement.removeChild('loadmore')
    }else{
        loadPokemonItems(offset,limit)
    }  
})


  