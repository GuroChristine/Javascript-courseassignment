method: "Get",
headers; headersList


let data = await response.text();
console.log(data);

async function getPokemon() {
    const pokemonContainer = document.querySelector(".pokemon");

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/", { 
      method: "GET",
    });
    
    let data = await response.json();
    let res = await data.results;
    console.log(res);


    for(let i = 0; i < res.length; i++){
        pokemonContainer.innerHTML += `
            <div class="poke">
            <div class="title">
                <h2>${res[i].name}</h2>
            </div>
            <div class="info">
                <p>${res[i].url}</p>
            </div>
            </div>
        `
    }
    
}

getPokemon();

async function getEvolution() {
    const pokemonContainer = document.querySelector(".pokemon");

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/", { 
      method: "GET",
    });
    
    let data = await response.json();
    let res = await data.results;
    console.log(res);


    for(let i = 0; i < res.length; i++){
        pokemonContainer.innerHTML += `
            <div class="poke">
            <div class="title">
                <h2>${res[i].name}</h2>
            </div>
            <div class="info">
                <p>${res[i].url}</p>
            </div>
            </div>
        `
    }
    
}
getEvolution();

async function getMove() {
    const pokemonContainer = document.querySelector(".pokemon");

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/", { 
      method: "GET",
    });
    
    let data = await response.json();
    let res = await data.results;
    console.log(res);


    for(let i = 0; i < res.length; i++){
        pokemonContainer.innerHTML += `
            <div class="poke">
            <div class="title">
                <h2>${res[i].name}</h2>
            </div>
            <div class="info">
                <p>${res[i].url}</p>
            </div>
            </div>
        `
    }
    
}

getMove();