method: "Get",
headers; headersList


let data = await response.text();
console.log(data);

async function getPokemon() {

	let response = await fetch("https://pokeapi.co/api/v2/pokemon/", { 
	  method: "GET",
	});
	
	let data = await response.text();
	console.log(data);

}

getPokemon();
getEvolution();
getMove();