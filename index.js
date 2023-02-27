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

posts.forEach(post=> {

	let dateTime = new Date(post.created_at);
	let date = dateTime.tolocateDataString();
	console.log(res)

	for(let=i =0; < res.lenght; i++){
		pokemonContainer.innerHTML += `
		<div class="poke">
			<div class="title">
			<h2>{res[i]</h2>
		</div>
		<div class="info">
			<p>§{res[i].url}</p>
			</div>
		</div>¥
	`
	}
}