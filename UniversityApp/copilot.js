const fetchpokimon = ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    
}

