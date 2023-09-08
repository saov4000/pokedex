
const pokeAPI = {}

function convertPokeAPIdetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.id = pokeDetail.id
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types
    pokemon.types = types 
    pokemon.type = type
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

function convertPokeAPIdetailToPokemon2(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.id = pokeDetail.id
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types
    pokemon.types = types 
    pokemon.type = type
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

function convertToDetails(pokeDetail){
    const pokemon = new Pokemon()

    pokemon.hp = pokeDetail.hp
    pokemon.atack = pokeDetail.atack
    pokemon.defense = pokeDetail.defense
    pokemon.specialAtack = pokeDetail.specialAtack
    pokemon.specialdefense = pokeDetail.specialdefense
    pokemon.speed = pokeDetail.speed
    return pokemon
}

pokeAPI.getPokemonDetails = (pokemon)=>{
    return fetch(pokemon.url)
    .then((response)=>response.json())
    .then(convertPokeAPIdetailToPokemon)
}

/*pokeAPI.getPokemonDetails2 = (pokemon)=>{
    return fetch(pokemon)
    .then((response)=>response.json())
    .then(convertPokeAPIdetailToPokemon2)
}*/

/*pokeAPI.getPokemonDetailsPage = (pokemon)=>{
    return fetch(pokemon.url)
    .then((response)=>response.json())
    .then(convertToDetails)
}*/

pokeAPI.getOnePokemon = (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return fetch(url)
    .then((response)=> response.json())
    .then((jsonBody)=> jsonBody)
    .then((pokemonsDetails)=> pokemonsDetails)
}

pokeAPI.getPokemons = (offset=0,limit=5)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response)=> response.json())
    .then((jsonBody)=> jsonBody.results)
    .then((pokemons)=> pokemons.map(pokeAPI.getPokemonDetails))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails)=> pokemonsDetails)
}

pokeAPI.getDetails = (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return fetch(url)
    .then((response)=>response.json())
    .then((jsonBody)=>jsonBody.stats)
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails)=> pokemonsDetails)
}






