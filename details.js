const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const pokemonName = params.get("name");

const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

async function getPokemon() {
    const pokemonContainer = document.querySelector(".pokemon");

    let response = await fetch(url, { 
      method: "GET",
    });
    
    let data = await response.json();
    // let res = await data.results;
    // console.log(res);
    console.log(data)


    
        pokemonContainer.innerHTML += `
            <div class="poke">
            <div class="title">
                <h2>${data.name}</h2>
            </div>
            <div class="info">
                <p>Height: ${data.height}</p>
                <p>Height: ${data.height}</p>
            </div>
            </div>
        `
    
    
}

getPokemon();