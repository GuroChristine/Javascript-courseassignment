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
		{
			count; 64,
			next; "https://pokeapi.co/api/v2/berry/?offset=20&limit=20",
			previous; null,
			results; [
			  {
				name: "cheri",
				url: "https://pokeapi.co/api/v2/berry/1/"
			  },
			  {
				name: "chesto",
				url: "https://pokeapi.co/api/v2/berry/2/"
			  },
			  {
				name: "pecha",
				url: "https://pokeapi.co/api/v2/berry/3/"
			  },
			  {
				name: "rawst",
				url: "https://pokeapi.co/api/v2/berry/4/"
			  },
			  {
				name: "aspear",
				url: "https://pokeapi.co/api/v2/berry/5/"
			  },
			  {
				name: "leppa",
				url: "https://pokeapi.co/api/v2/berry/6/"
			  },
			  {
				name: "oran",
				url: "https://pokeapi.co/api/v2/berry/7/"
			  },
			  {
				name: "persim",
				url: "https://pokeapi.co/api/v2/berry/8/"
			  },
			  {
				name: "lum",
				url: "https://pokeapi.co/api/v2/berry/9/"
			  },
			  {
				name: "sitrus",
				url: "https://pokeapi.co/api/v2/berry/10/"
			  },
			  {
				name: "figy",
				url: "https://pokeapi.co/api/v2/berry/11/"
			  },
			  {
				name: "wiki",
				url: "https://pokeapi.co/api/v2/berry/12/"
			  },
			  {
				name: "mago",
				url: "https://pokeapi.co/api/v2/berry/13/"
			  },
			  {
				name: "aguav",
				url: "https://pokeapi.co/api/v2/berry/14/"
			  },
			  {
				name: "iapapa",
				url: "https://pokeapi.co/api/v2/berry/15/"
			  },
			  {
				name: "razz",
				url: "https://pokeapi.co/api/v2/berry/16/"
			  },
			  {
				name: "bluk",
				url: "https://pokeapi.co/api/v2/berry/17/"
			  },
			  {
				name: "nanab",
				url: "https://pokeapi.co/api/v2/berry/18/"
			  },
			  {
				name: "wepear",
				url: "https://pokeapi.co/api/v2/berry/19/"
			  },
			  {
				name: "pinap",
				url: "https://pokeapi.co/api/v2/berry/20/"
			  }
			]
		  }
			{
				count: 5,
				next; null,
				previous; null,
				results; [
				  {
					name: "very-soft",
					url: "https://pokeapi.co/api/v2/berry-firmness/1/"
				  },
				  {
					name: "soft",
					url: "https://pokeapi.co/api/v2/berry-firmness/2/"
				  },
				  {
					name: "hard",
					url: "https://pokeapi.co/api/v2/berry-firmness/3/"
				  },
				  {
					name: "very-hard",
					url: "https://pokeapi.co/api/v2/berry-firmness/4/"
				  },
				  {
					name: "super-hard",
					url: "https://pokeapi.co/api/v2/berry-firmness/5/"
				  }
				]
			  }
			  {
				count: 5,
				next; null,
				previous; null,
				results; [
				  {
					name: "spicy",
					url: "https://pokeapi.co/api/v2/berry-flavor/1/"
				  },
				  {
					name: "dry",
					url: "https://pokeapi.co/api/v2/berry-flavor/2/"
				  },
				  {
					name: "sweet",
					url: "https://pokeapi.co/api/v2/berry-flavor/3/"
				  },
				  {
					name: "bitter",
					url: "https://pokeapi.co/api/v2/berry-flavor/4/"
				  },
				  {
					name: "sour",
					url: "https://pokeapi.co/api/v2/berry-flavor/5/"
				  }
				]
			  }
			  {
				count: 5,
				next; null,
				previous; null,
				results; [
				  {
					name: "cool",
					url: "https://pokeapi.co/api/v2/contest-type/1/"
				  },
				  {
					name: "beauty",
					url: "https://pokeapi.co/api/v2/contest-type/2/"
				  },
				  {
					name: "cute",
					url: "https://pokeapi.co/api/v2/contest-type/3/"
				  },
				  {
					name: "smart",
					url: "https://pokeapi.co/api/v2/contest-type/4/"
				  },
				  {
					name: "tough",
					url: "https://pokeapi.co/api/v2/contest-type/5/"
				  }
				]
			  }
			  {
				{
					count: 33,
					next; "https://pokeapi.co/api/v2/contest-effect/?offset=20&limit=13",
					previous; null,
					results; [
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/1/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/2/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/3/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/4/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/5/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/6/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/7/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/8/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/9/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/10/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/11/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/12/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/13/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/14/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/15/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/16/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/17/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/18/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/19/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/contest-effect/20/"
					  }
					]
				  }
			  }
			  {
				{
					count: 22,
					next; "https://pokeapi.co/api/v2/super-contest-effect/?offset=20&limit=2",
					previous; null,
					results; [
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/1/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/2/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/4/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/5/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/6/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/7/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/8/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/9/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/10/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/11/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/12/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/13/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/14/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/15/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/16/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/17/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/18/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/19/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/20/"
					  },
					  {
						url: "https://pokeapi.co/api/v2/super-contest-effect/21/"
					  }
					]
				  }
			  }
			  {
				{
					count: 31,
					next; "https://pokeapi.co/api/v2/encounter-method/?offset=20&limit=11",
					previous; null,
					results; [
					  {
						name: "walk",
						url: "https://pokeapi.co/api/v2/encounter-method/1/"
					  },
					  {
						name: "old-rod",
						url: "https://pokeapi.co/api/v2/encounter-method/2/"
					  },
					  {
						name: "good-rod",
						url: "https://pokeapi.co/api/v2/encounter-method/3/"
					  },
					  {
						name: "super-rod",
						url: "https://pokeapi.co/api/v2/encounter-method/4/"
					  },
					  {
						name: "surf",
						url: "https://pokeapi.co/api/v2/encounter-method/5/"
					  },
					  {
						name: "rock-smash",
						url: "https://pokeapi.co/api/v2/encounter-method/6/"
					  },
					  {
						name: "headbutt",
						url: "https://pokeapi.co/api/v2/encounter-method/7/"
					  },
					  {
						name: "dark-grass",
						url: "https://pokeapi.co/api/v2/encounter-method/8/"
					  },
					  {
						name: "grass-spots",
						url: "https://pokeapi.co/api/v2/encounter-method/9/"
					  },
					  {
						name: "cave-spots",
						url: "https://pokeapi.co/api/v2/encounter-method/10/"
					  },
					  {
						name: "bridge-spots",
						url: "https://pokeapi.co/api/v2/encounter-method/11/"
					  },
					  {
						name: "super-rod-spots",
						url: "https://pokeapi.co/api/v2/encounter-method/12/"
					  },
					  {
						name: "surf-spots",
						url: "https://pokeapi.co/api/v2/encounter-method/13/"
					  },
					  {
						name: "yellow-flowers",
						url: "https://pokeapi.co/api/v2/encounter-method/14/"
					  },
					  {
						name: "purple-flowers",
						url: "https://pokeapi.co/api/v2/encounter-method/15/"
					  },
					  {
						name: "red-flowers",
						url: "https://pokeapi.co/api/v2/encounter-method/16/"
					  },
					  {
						name: "rough-terrain",
						url: "https://pokeapi.co/api/v2/encounter-method/17/"
					  },
					  {
						name: "gift",
						url: "https://pokeapi.co/api/v2/encounter-method/18/"
					  },
					  {
						name: "gift-egg",
						url: "https://pokeapi.co/api/v2/encounter-method/19/"
					  },
					  {
						name: "only-one",
						url: "https://pokeapi.co/api/v2/encounter-method/20/"
					  }
					]
				  }
				}
			  {
				{
					count: 13,
					next; null,
					previous; null,
					results; [
					  {
						name: "swarm",
						url: "https://pokeapi.co/api/v2/encounter-condition/1/"
					  },
					  {
						name: "time",
						url: "https://pokeapi.co/api/v2/encounter-condition/2/"
					  },
					  {
						name: "radar",
						url: "https://pokeapi.co/api/v2/encounter-condition/3/"
					  },
					  {
						name: "slot2",
						url: "https://pokeapi.co/api/v2/encounter-condition/4/"
					  },
					  {
						name: "radio",
						url: "https://pokeapi.co/api/v2/encounter-condition/5/"
					  },
					  {
						name: "season",
						url: "https://pokeapi.co/api/v2/encounter-condition/6/"
					  },
					  {
						name: "starter",
						url: "https://pokeapi.co/api/v2/encounter-condition/7/"
					  },
					  {
						name: "tv-option",
						url: "https://pokeapi.co/api/v2/encounter-condition/8/"
					  },
					  {
						name: "story-progress",
						url: "https://pokeapi.co/api/v2/encounter-condition/9/"
					  },
					  {
						name: "other",
						url: "https://pokeapi.co/api/v2/encounter-condition/10/"
					  },
					  {
						name: "item",
						url: "https://pokeapi.co/api/v2/encounter-condition/11/"
					  },
					  {
						name: "weekday",
						url: "https://pokeapi.co/api/v2/encounter-condition/12/"
					  },
					  {
						name: "first-party-pokemon",
						url: "https://pokeapi.co/api/v2/encounter-condition/13/"
					  }
					]
				    }
				}
					{
				  {
					{
						count: 71,
						next; "https://pokeapi.co/api/v2/encounter-condition-value/?offset=20&limit=20",
						previous; null,
						results; [
						  {
							name: "swarm-yes",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/1/"
						  },
						  {
							name: "swarm-no",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/2/"
						  },
						  {
							name: "time-morning",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/3/"
						  },
						  {
							name: "time-day",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/4/"
						  },
						  {
							name: "time-night",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/5/"
						  },
						  {
							name: "radar-on",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/6/"
						  },
						  {
							name: "radar-off",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/7/"
						  },
						  {
							name: "slot2-none",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/8/"
						  },
						  {
							name: "slot2-ruby",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/9/"
						  },
						  {
							name: "slot2-sapphire",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/10/"
						  },
						  {
							name: "slot2-emerald",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/11/"
						  },
						  {
							name: "slot2-firered",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/12/"
						  },
						  {
							name: "slot2-leafgreen",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/13/"
						  },
						  {
							name: "radio-off",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/14/"
						  },
						  {
							name: "radio-hoenn",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/15/"
						  },
						  {
							name: "radio-sinnoh",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/16/"
						  },
						  {
							name: "season-spring",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/17/"
						  },
						  {
							name: "season-summer",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/18/"
						  },
						  {
							name: "season-autumn",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/19/"
						  },
						  {
							name: "season-winter",
							url: "https://pokeapi.co/api/v2/encounter-condition-value/20/"
						  }
						]
					  }
				}	
				{
					{
						count: 528,
						next; "https://pokeapi.co/api/v2/evolution-chain/?offset=20&limit=20",
						previous; null,
						results; [
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/1/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/2/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/3/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/4/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/5/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/6/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/7/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/8/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/9/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/10/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/11/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/12/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/13/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/14/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/15/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/16/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/17/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/18/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/19/"
						  },
						  {
							url: "https://pokeapi.co/api/v2/evolution-chain/20/"
						  }
						]
					  }
				}
				{
					{
						count: 13,
						next; null,
						previous; null,
						results; [
						  {
							name: "level-up",
							url: "https://pokeapi.co/api/v2/evolution-trigger/1/"
						  },
						  {
							name: "trade",
							url: "https://pokeapi.co/api/v2/evolution-trigger/2/"
						  },
						  {
							name: "use-item",
							url: "https://pokeapi.co/api/v2/evolution-trigger/3/"
						  },
						  {
							name: "shed",
							url: "https://pokeapi.co/api/v2/evolution-trigger/4/"
						  },
						  {
							name: "spin",
							url: "https://pokeapi.co/api/v2/evolution-trigger/5/"
						  },
						  {
							name: "tower-of-darkness",
							url: "https://pokeapi.co/api/v2/evolution-trigger/6/"
						  },
						  {
							name: "tower-of-waters",
							url: "https://pokeapi.co/api/v2/evolution-trigger/7/"
						  },
						  {
							name: "three-critical-hits",
							url: "https://pokeapi.co/api/v2/evolution-trigger/8/"
						  },
						  {
							name: "take-damage",
							url: "https://pokeapi.co/api/v2/evolution-trigger/9/"
						  },
						  {
							name: "other",
							url: "https://pokeapi.co/api/v2/evolution-trigger/10/"
						  },
						  {
							name: "agile-style-move",
							url: "https://pokeapi.co/api/v2/evolution-trigger/11/"
						  },
						  {
							name: "strong-style-move",
							url: "https://pokeapi.co/api/v2/evolution-trigger/12/"
						  },
						  {
							name: "recoil-damage",
							url: "https://pokeapi.co/api/v2/evolution-trigger/13/"
						  }
						]
					  }
			  }
			  {
				{
					count: 9,
					next; null,
					previous; null,
					results; [
					  {
						name: "generation-i",
						url: "https://pokeapi.co/api/v2/generation/1/"
					  },
					  {
						name: "generation-ii",
						url: "https://pokeapi.co/api/v2/generation/2/"
					  },
					  {
						name: "generation-iii",
						url: "https://pokeapi.co/api/v2/generation/3/"
					  },
					  {
						name: "generation-iv",
						url: "https://pokeapi.co/api/v2/generation/4/"
					  },
					  {
						name: "generation-v",
						url: "https://pokeapi.co/api/v2/generation/5/"
					  },
					  {
						name: "generation-vi",
						url: "https://pokeapi.co/api/v2/generation/6/"
					  },
					  {
						name: "generation-vii",
						url: "https://pokeapi.co/api/v2/generation/7/"
					  },
					  {
						name: "generation-viii",
						url: "https://pokeapi.co/api/v2/generation/8/"
					  },
					  {
						name: "generation-ix",
						url: "https://pokeapi.co/api/v2/generation/9/"
					  }
					]
				  }
			  }
			  {
				{
					count: 30,
					next; "https://pokeapi.co/api/v2/pokedex/?offset=20&limit=10",
					previous; null,
					results; [
					  {
						name: "national",
						url: "https://pokeapi.co/api/v2/pokedex/1/"
					  },
					  {
						name: "kanto",
						url: "https://pokeapi.co/api/v2/pokedex/2/"
					  },
					  {
						name: "original-johto",
						url: "https://pokeapi.co/api/v2/pokedex/3/"
					  },
					  {
						name: "hoenn",
						url: "https://pokeapi.co/api/v2/pokedex/4/"
					  },
					  {
						name: "original-sinnoh",
						url: "https://pokeapi.co/api/v2/pokedex/5/"
					  },
					  {
						name: "extended-sinnoh",
						url: "https://pokeapi.co/api/v2/pokedex/6/"
					  },
					  {
						name: "updated-johto",
						url: "https://pokeapi.co/api/v2/pokedex/7/"
					  },
					  {
						name: "original-unova",
						url: "https://pokeapi.co/api/v2/pokedex/8/"
					  },
					  {
						name: "updated-unova",
						url: "https://pokeapi.co/api/v2/pokedex/9/"
					  },
					  {
						name: "conquest-gallery",
						url: "https://pokeapi.co/api/v2/pokedex/11/"
					  },
					  {
						name: "kalos-central",
						url: "https://pokeapi.co/api/v2/pokedex/12/"
					  },
					  {
						name: "kalos-coastal",
						url: "https://pokeapi.co/api/v2/pokedex/13/"
					  },
					  {
						name: "kalos-mountain",
						url: "https://pokeapi.co/api/v2/pokedex/14/"
					  },
					  {
						name: "updated-hoenn",
						url: "https://pokeapi.co/api/v2/pokedex/15/"
					  },
					  {
						name: "original-alola",
						url: "https://pokeapi.co/api/v2/pokedex/16/"
					  },
					  {
						name: "original-melemele",
						url: "https://pokeapi.co/api/v2/pokedex/17/"
					  },
					  {
						name: "original-akala",
						url: "https://pokeapi.co/api/v2/pokedex/18/"
					  },
					  {
						name: "original-ulaula",
						url: "https://pokeapi.co/api/v2/pokedex/19/"
					  },
					  {
						name: "original-poni",
						url: "https://pokeapi.co/api/v2/pokedex/20/"
					  },
					  {
						name: "updated-alola",
						url: "https://pokeapi.co/api/v2/pokedex/21/"
					  }
					]
				  }
			  }
			}
			{
				{
					count: 41,
					next; "https://pokeapi.co/api/v2/version/?offset=20&limit=20",
					previous; null,
					results; [
					  {
						name: "red",
						url: "https://pokeapi.co/api/v2/version/1/"
					  },
					  {
						name: "blue",
						url: "https://pokeapi.co/api/v2/version/2/"
					  },
					  {
						name: "yellow",
						url: "https://pokeapi.co/api/v2/version/3/"
					  },
					  {
						name: "gold",
						url: "https://pokeapi.co/api/v2/version/4/"
					  },
					  {
						name: "silver",
						url: "https://pokeapi.co/api/v2/version/5/"
					  },
					  {
						name: "crystal",
						url: "https://pokeapi.co/api/v2/version/6/"
					  },
					  {
						name: "ruby",
						url: "https://pokeapi.co/api/v2/version/7/"
					  },
					  {
						name: "sapphire",
						url: "https://pokeapi.co/api/v2/version/8/"
					  },
					  {
						name: "emerald",
						url: "https://pokeapi.co/api/v2/version/9/"
					  },
					  {
						name: "firered",
						url: "https://pokeapi.co/api/v2/version/10/"
					  },
					  {
						name: "leafgreen",
						url: "https://pokeapi.co/api/v2/version/11/"
					  },
					  {
						name: "diamond",
						url: "https://pokeapi.co/api/v2/version/12/"
					  },
					  {
						name: "pearl",
						url: "https://pokeapi.co/api/v2/version/13/"
					  },
					  {
						name: "platinum",
						url: "https://pokeapi.co/api/v2/version/14/"
					  },
					  {
						name: "heartgold",
						url: "https://pokeapi.co/api/v2/version/15/"
					  },
					  {
						name: "soulsilver",
						url: "https://pokeapi.co/api/v2/version/16/"
					  },
					  {
						name: "black",
						url: "https://pokeapi.co/api/v2/version/17/"
					  },
					  {
						name: "white",
						url: "https://pokeapi.co/api/v2/version/18/"
					  },
					  {
						name: "colosseum",
						url: "https://pokeapi.co/api/v2/version/19/"
					  },
					  {
						name: "xd",
						url: "https://pokeapi.co/api/v2/version/20/"
					  }
					]
				  }	
			}
			{
				{
					count: 25,
					next; "https://pokeapi.co/api/v2/version-group/?offset=20&limit=5",
					previous; null,
					results; [
					  {
						name: "red-blue",
						url: "https://pokeapi.co/api/v2/version-group/1/"
					  },
					  {
						name: "yellow",
						url: "https://pokeapi.co/api/v2/version-group/2/"
					  },
					  {
						name: "gold-silver",
						url: "https://pokeapi.co/api/v2/version-group/3/"
					  },
					  {
						name: "crystal",
						url: "https://pokeapi.co/api/v2/version-group/4/"
					  },
					  {
						name: "ruby-sapphire",
						url: "https://pokeapi.co/api/v2/version-group/5/"
					  },
					  {
						name: "emerald",
						url: "https://pokeapi.co/api/v2/version-group/6/"
					  },
					  {
						name: "firered-leafgreen",
						url: "https://pokeapi.co/api/v2/version-group/7/"
					  },
					  {
						name: "diamond-pearl",
						url: "https://pokeapi.co/api/v2/version-group/8/"
					  },
					  {
						name: "platinum",
						url: "https://pokeapi.co/api/v2/version-group/9/"
					  },
					  {
						name: "heartgold-soulsilver",
						url: "https://pokeapi.co/api/v2/version-group/10/"
					  },
					  {
						name: "black-white",
						url: "https://pokeapi.co/api/v2/version-group/11/"
					  },
					  {
						name: "colosseum",
						url: "https://pokeapi.co/api/v2/version-group/12/"
					  },
					  {
						name: "xd",
						url: "https://pokeapi.co/api/v2/version-group/13/"
					  },
					  {
						name: "black-2-white-2",
						url: "https://pokeapi.co/api/v2/version-group/14/"
					  },
					  {
						name: "x-y",
						url: "https://pokeapi.co/api/v2/version-group/15/"
					  },
					  {
						name: "omega-ruby-alpha-sapphire",
						url: "https://pokeapi.co/api/v2/version-group/16/"
					  },
					  {
						name: "sun-moon",
						url: "https://pokeapi.co/api/v2/version-group/17/"
					  },
					  {
						name: "ultra-sun-ultra-moon",
						url: "https://pokeapi.co/api/v2/version-group/18/"
					  },
					  {
						name: "lets-go-pikachu-lets-go-eevee",
						url: "https://pokeapi.co/api/v2/version-group/19/"
					  },
					  {
						name: "sword-shield",
						url: "https://pokeapi.co/api/v2/version-group/20/"
					  }
					]
				  }
			}
			{
				{
					count: 2050,
					next; "https://pokeapi.co/api/v2/item/?offset=20&limit=20",
					previous; null,
					results; [
					  {
						name: "master-ball",
						url: "https://pokeapi.co/api/v2/item/1/"
					  },
					  {
						name: "ultra-ball",
						url: "https://pokeapi.co/api/v2/item/2/"
					  },
					  {
						name: "great-ball",
						url: "https://pokeapi.co/api/v2/item/3/"
					  },
					  {
						name: "poke-ball",
						url: "https://pokeapi.co/api/v2/item/4/"
					  },
					  {
						name: "safari-ball",
						url: "https://pokeapi.co/api/v2/item/5/"
					  },
					  {
						name: "net-ball",
						url: "https://pokeapi.co/api/v2/item/6/"
					  },
					  {
						name: "dive-ball",
						url: "https://pokeapi.co/api/v2/item/7/"
					  },
					  {
						name: "nest-ball",
						url: "https://pokeapi.co/api/v2/item/8/"
					  },
					  {
						name: "repeat-ball",
						url: "https://pokeapi.co/api/v2/item/9/"
					  },
					  {
						name: "timer-ball",
						url: "https://pokeapi.co/api/v2/item/10/"
					  },
					  {
						name: "luxury-ball",
						url: "https://pokeapi.co/api/v2/item/11/"
					  },
					  {
						name: "premier-ball",
						url: "https://pokeapi.co/api/v2/item/12/"
					  },
					  {
						name: "dusk-ball",
						url: "https://pokeapi.co/api/v2/item/13/"
					  },
					  {
						name: "heal-ball",
						url: "https://pokeapi.co/api/v2/item/14/"
					  },
					  {
						name: "quick-ball",
						url: "https://pokeapi.co/api/v2/item/15/"
					  },
					  {
						name: "cherish-ball",
						url: "https://pokeapi.co/api/v2/item/16/"
					  },
					  {
						name: "potion",
						url: "https://pokeapi.co/api/v2/item/17/"
					  },
					  {
						name: "antidote",
						url: "https://pokeapi.co/api/v2/item/18/"
					  },
					  {
						name: "burn-heal",
						url: "https://pokeapi.co/api/v2/item/19/"
					  },
					  {
						name: "ice-heal",
						url: "https://pokeapi.co/api/v2/item/20/"
					  }
					]
				  }
			}
			{
				{
					count: 8,
					next; null,
					previous; null,
					results; [
					  {
						name: "countable",
						url: "https://pokeapi.co/api/v2/item-attribute/1/"
					  },
					  {
						name: "consumable",
						url: "https://pokeapi.co/api/v2/item-attribute/2/"
					  },
					  {
						name: "usable-overworld",
						url: "https://pokeapi.co/api/v2/item-attribute/3/"
					  },
					  {
						name: "usable-in-battle",
						url: "https://pokeapi.co/api/v2/item-attribute/4/"
					  },
					  {
						name: "holdable",
						url: "https://pokeapi.co/api/v2/item-attribute/5/"
					  },
					  {
						name: "holdable-passive",
						url: "https://pokeapi.co/api/v2/item-attribute/6/"
					  },
					  {
						name: "holdable-active",
						url: "https://pokeapi.co/api/v2/item-attribute/7/"
					  },
					  {
						name: "underground",
						url: "https://pokeapi.co/api/v2/item-attribute/8/"
					  }
					]
				  }
			}
			{
				{
					count: 54,
					next; "https://pokeapi.co/api/v2/item-category/?offset=20&limit=20",
					previous; null,
					results; [
					  {
						name: "stat-boosts",
						url: "https://pokeapi.co/api/v2/item-category/1/"
					  },
					  {
						name: "effort-drop",
						url: "https://pokeapi.co/api/v2/item-category/2/"
					  },
					  {
						name: "medicine",
						url: "https://pokeapi.co/api/v2/item-category/3/"
					  },
					  {
						name: "other",
						url: "https://pokeapi.co/api/v2/item-category/4/"
					  },
					  {
						name: "in-a-pinch",
						url: "https://pokeapi.co/api/v2/item-category/5/"
					  },
					  {
						name: "picky-healing",
						url: "https://pokeapi.co/api/v2/item-category/6/"
					  },
					  {
						name: "type-protection",
						url: "https://pokeapi.co/api/v2/item-category/7/"
					  },
					  {
						name: "baking-only",
						url: "https://pokeapi.co/api/v2/item-category/8/"
					  },
					  {
						name: "collectibles",
						url: "https://pokeapi.co/api/v2/item-category/9/"
					  },
					  {
						name: "evolution",
						url: "https://pokeapi.co/api/v2/item-category/10/"
					  },
					  {
						name: "spelunking",
						url: "https://pokeapi.co/api/v2/item-category/11/"
					  },
					  {
						name: "held-items",
						url: "https://pokeapi.co/api/v2/item-category/12/"
					  },
					  {
						name: "choice",
						url: "https://pokeapi.co/api/v2/item-category/13/"
					  },
					  {
						name: "effort-training",
						url: "https://pokeapi.co/api/v2/item-category/14/"
					  },
					  {
						name: "bad-held-items",
						url: "https://pokeapi.co/api/v2/item-category/15/"
					  },
					  {
						name: "training",
						url: "https://pokeapi.co/api/v2/item-category/16/"
					  },
					  {
						name: "plates",
						url: "https://pokeapi.co/api/v2/item-category/17/"
					  },
					  {
						name: "species-specific",
						url: "https://pokeapi.co/api/v2/item-category/18/"
					  },
					  {
						name: "type-enhancement",
						url: "https://pokeapi.co/api/v2/item-category/19/"
					  },
					  {
						name: "event-items",
						url: "https://pokeapi.co/api/v2/item-category/20/"
					  }
					]
				  }
			}
			{
				{
					count: 7,
					next; null,
					previous; null,
					results; [
					  {
						name: "badly-poison",
						url: "https://pokeapi.co/api/v2/item-fling-effect/1/"
					  },
					  {
						name: "burn",
						url: "https://pokeapi.co/api/v2/item-fling-effect/2/"
					  },
					  {
						name: "berry-effect",
						url: "https://pokeapi.co/api/v2/item-fling-effect/3/"
					  },
					  {
						name: "herb-effect",
						url: "https://pokeapi.co/api/v2/item-fling-effect/4/"
					  },
					  {
						name: "paralyze",
						url: "https://pokeapi.co/api/v2/item-fling-effect/5/"
					  },
					  {
						name: "poison",
						url: "https://pokeapi.co/api/v2/item-fling-effect/6/"
					  },
					  {
						name: "flinch",
						url: "https://pokeapi.co/api/v2/item-fling-effect/7/"
					  }
					]
				  }
			}
			{
				{
					count: 8,
					next; null,
					previous; null,
					results; [
					  {
						name: "misc",
						url: "https://pokeapi.co/api/v2/item-pocket/1/"
					  },
					  {
						name: "medicine",
						url: "https://pokeapi.co/api/v2/item-pocket/2/"
					  },
					  {
						name: "pokeballs",
						url: "https://pokeapi.co/api/v2/item-pocket/3/"
					  },
					  {
						name: "machines",
						url: "https://pokeapi.co/api/v2/item-pocket/4/"
					  },
					  {
						name: "berries",
						url: "https://pokeapi.co/api/v2/item-pocket/5/"
					  },
					  {
						name: "mail",
						url: "https://pokeapi.co/api/v2/item-pocket/6/"
					  },
					  {
						name: "battle",
						url: "https://pokeapi.co/api/v2/item-pocket/7/"
					  },
					  {
						name: "key",
						url: "https://pokeapi.co/api/v2/item-pocket/8/"
					  }
					]
				  }
			}
		{
			{
				count: 850,
				next; "https://pokeapi.co/api/v2/location/?offset=20&limit=20",
				previous; null,
				results; [
				  {
					name: "canalave-city",
					url: "https://pokeapi.co/api/v2/location/1/"
				  },
				  {
					name: "eterna-city",
					url: "https://pokeapi.co/api/v2/location/2/"
				  },
				  {
					name: "pastoria-city",
					url: "https://pokeapi.co/api/v2/location/3/"
				  },
				  {
					name: "sunyshore-city",
					url: "https://pokeapi.co/api/v2/location/4/"
				  },
				  {
					name: "sinnoh-pokemon-league",
					url: "https://pokeapi.co/api/v2/location/5/"
				  },
				  {
					name: "oreburgh-mine",
					url: "https://pokeapi.co/api/v2/location/6/"
				  },
				  {
					name: "valley-windworks",
					url: "https://pokeapi.co/api/v2/location/7/"
				  },
				  {
					name: "eterna-forest",
					url: "https://pokeapi.co/api/v2/location/8/"
				  },
				  {
					name: "fuego-ironworks",
					url: "https://pokeapi.co/api/v2/location/9/"
				  },
				  {
					name: "mt-coronet",
					url: "https://pokeapi.co/api/v2/location/10/"
				  },
				  {
					name: "great-marsh",
					url: "https://pokeapi.co/api/v2/location/11/"
				  },
				  {
					name: "solaceon-ruins",
					url: "https://pokeapi.co/api/v2/location/12/"
				  },
				  {
					name: "sinnoh-victory-road",
					url: "https://pokeapi.co/api/v2/location/13/"
				  },
				  {
					name: "ravaged-path",
					url: "https://pokeapi.co/api/v2/location/14/"
				  },
				  {
					name: "oreburgh-gate",
					url: "https://pokeapi.co/api/v2/location/15/"
				  },
				  {
					name: "stark-mountain",
					url: "https://pokeapi.co/api/v2/location/16/"
				  },
				  {
					name: "spring-path",
					url: "https://pokeapi.co/api/v2/location/17/"
				  },
				  {
					name: "turnback-cave",
					url: "https://pokeapi.co/api/v2/location/18/"
				  },
				  {
					name: "snowpoint-temple",
					url: "https://pokeapi.co/api/v2/location/19/"
				  },
				  {
					name: "wayward-cave",
					url: "https://pokeapi.co/api/v2/location/20/"
				  }
				]
			  }
		}
		{
			{
				count: 732,
				next; "https://pokeapi.co/api/v2/location-area/?offset=20&limit=20",
				previous; null,
				results; [
				  {
					name: "canalave-city-area",
					url: "https://pokeapi.co/api/v2/location-area/1/"
				  },
				  {
					name: "eterna-city-area",
					url: "https://pokeapi.co/api/v2/location-area/2/"
				  },
				  {
					name: "pastoria-city-area",
					url: "https://pokeapi.co/api/v2/location-area/3/"
				  },
				  {
					name: "sunyshore-city-area",
					url: "https://pokeapi.co/api/v2/location-area/4/"
				  },
				  {
					name: "sinnoh-pokemon-league-area",
					url: "https://pokeapi.co/api/v2/location-area/5/"
				  },
				  {
					name: "oreburgh-mine-1f",
					url: "https://pokeapi.co/api/v2/location-area/6/"
				  },
				  {
					name: "oreburgh-mine-b1f",
					url: "https://pokeapi.co/api/v2/location-area/7/"
				  },
				  {
					name: "valley-windworks-area",
					url: "https://pokeapi.co/api/v2/location-area/8/"
				  },
				  {
					name: "eterna-forest-area",
					url: "https://pokeapi.co/api/v2/location-area/9/"
				  },
				  {
					name: "fuego-ironworks-area",
					url: "https://pokeapi.co/api/v2/location-area/10/"
				  },
				  {
					name: "mt-coronet-1f-route-207",
					url: "https://pokeapi.co/api/v2/location-area/11/"
				  },
				  {
					name: "mt-coronet-2f",
					url: "https://pokeapi.co/api/v2/location-area/12/"
				  },
				  {
					name: "mt-coronet-3f",
					url: "https://pokeapi.co/api/v2/location-area/13/"
				  },
				  {
					name: "mt-coronet-exterior-snowfall",
					url: "https://pokeapi.co/api/v2/location-area/14/"
				  },
				  {
					name: "mt-coronet-exterior-blizzard",
					url: "https://pokeapi.co/api/v2/location-area/15/"
				  },
				  {
					name: "mt-coronet-4f",
					url: "https://pokeapi.co/api/v2/location-area/16/"
				  },
				  {
					name: "mt-coronet-4f-small-room",
					url: "https://pokeapi.co/api/v2/location-area/17/"
				  },
				  {
					name: "mt-coronet-5f",
					url: "https://pokeapi.co/api/v2/location-area/18/"
				  },
				  {
					name: "mt-coronet-6f",
					url: "https://pokeapi.co/api/v2/location-area/19/"
				  },
				  {
					name: "mt-coronet-1f-from-exterior",
					url: "https://pokeapi.co/api/v2/location-area/20/"
				  }
				]
			  }
		}
		{
			{
				count: 5,
				next; null,
				previous; null,
				results; [
				  {
					name: "forest",
					url: "https://pokeapi.co/api/v2/pal-park-area/1/"
				  },
				  {
					name: "field",
					url: "https://pokeapi.co/api/v2/pal-park-area/2/"
				  },
				  {
					name: "mountain",
					url: "https://pokeapi.co/api/v2/pal-park-area/3/"
				  },
				  {
					name: "pond",
					url: "https://pokeapi.co/api/v2/pal-park-area/4/"
				  },
				  {
					name: "sea",
					url: "https://pokeapi.co/api/v2/pal-park-area/5/"
				  }
				]
			  }
		}
		{
			{
				count: 10,
				next; null,
				previous; null,
				results; [
				  {
					name: "kanto",
					url: "https://pokeapi.co/api/v2/region/1/"
				  },
				  {
					name: "johto",
					url: "https://pokeapi.co/api/v2/region/2/"
				  },
				  {
					name: "hoenn",
					url: "https://pokeapi.co/api/v2/region/3/"
				  },
				  {
					name: "sinnoh",
					url: "https://pokeapi.co/api/v2/region/4/"
				  },
				  {
					name: "unova",
					url: "https://pokeapi.co/api/v2/region/5/"
				  },
				  {
					name: "kalos",
					url: "https://pokeapi.co/api/v2/region/6/"
				  },
				  {
					name: "alola",
					url: "https://pokeapi.co/api/v2/region/7/"
				  },
				  {
					name: "galar",
					url: "https://pokeapi.co/api/v2/region/8/"
				  },
				  {
					name: "hisui",
					url: "https://pokeapi.co/api/v2/region/9/"
				  },
				  {
					name: "paldea",
					url: "https://pokeapi.co/api/v2/region/10/"
				  }
				]
			  }
		}
		{
			{
				count: 1688,
				next; "https://pokeapi.co/api/v2/machine/?offset=20&limit=20",
				previous; null,
				results; [
				  {
					url: "https://pokeapi.co/api/v2/machine/1/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/2/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/3/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/4/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/5/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/6/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/7/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/8/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/9/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/10/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/11/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/12/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/13/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/14/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/15/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/16/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/17/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/18/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/19/"
				  },
				  {
					url: "https://pokeapi.co/api/v2/machine/20/"
				  }
				]
			  }
		}
			  {
				{
					count: 918,
					next; "https://pokeapi.co/api/v2/move/?offset=20&limit=20",
					previous; null,
					results; [
					  {
						name: "pound",
						url: "https://pokeapi.co/api/v2/move/1/"
					  },
					  {
						name: "karate-chop",
						url: "https://pokeapi.co/api/v2/move/2/"
					  },
					  {
						name: "double-slap",
						url: "https://pokeapi.co/api/v2/move/3/"
					  },
					  {
						name: "comet-punch",
						url: "https://pokeapi.co/api/v2/move/4/"
					  },
					  {
						name: "mega-punch",
						url: "https://pokeapi.co/api/v2/move/5/"
					  },
					  {
						name: "pay-day",
						url: "https://pokeapi.co/api/v2/move/6/"
					  },
					  {
						name: "fire-punch",
						url: "https://pokeapi.co/api/v2/move/7/"
					  },
					  {
						name: "ice-punch",
						url: "https://pokeapi.co/api/v2/move/8/"
					  },
					  {
						name: "thunder-punch",
						url: "https://pokeapi.co/api/v2/move/9/"
					  },
					  {
						name: "scratch",
						url: "https://pokeapi.co/api/v2/move/10/"
					  },
					  {
						name: "vice-grip",
						url: "https://pokeapi.co/api/v2/move/11/"
					  },
					  {
						name: "guillotine",
						url: "https://pokeapi.co/api/v2/move/12/"
					  },
					  {
						name: "razor-wind",
						url: "https://pokeapi.co/api/v2/move/13/"
					  },
					  {
						name: "swords-dance",
						url: "https://pokeapi.co/api/v2/move/14/"
					  },
					  {
						name: "cut",
						url: "https://pokeapi.co/api/v2/move/15/"
					  },
					  {
						name: "gust",
						url: "https://pokeapi.co/api/v2/move/16/"
					  },
					  {
						name: "wing-attack",
						url: "https://pokeapi.co/api/v2/move/17/"
					  },
					  {
						name: "whirlwind",
						url: "https://pokeapi.co/api/v2/move/18/"
					  },
					  {
						name: "fly",
						url: "https://pokeapi.co/api/v2/move/19/"
					  },
					  {
						name: "bind",
						url: "https://pokeapi.co/api/v2/move/20/"
					  }
					]
				  }
			  }
			  {
				{
					count: 22,
					next; "https://pokeapi.co/api/v2/move-ailment/?offset=20&limit=2",
					previous; null,
					results; [
					  {
						name: "unknown",
						url: "https://pokeapi.co/api/v2/move-ailment/-1/"
					  },
					  {
						name: "none",
						url: "https://pokeapi.co/api/v2/move-ailment/0/"
					  },
					  {
						name: "paralysis",
						url: "https://pokeapi.co/api/v2/move-ailment/1/"
					  },
					  {
						name: "sleep",
						url: "https://pokeapi.co/api/v2/move-ailment/2/"
					  },
					  {
						name: "freeze",
						url: "https://pokeapi.co/api/v2/move-ailment/3/"
					  },
					  {
						name: "burn",
						url: "https://pokeapi.co/api/v2/move-ailment/4/"
					  },
					  {
						name: "poison",
						url: "https://pokeapi.co/api/v2/move-ailment/5/"
					  },
					  {
						name: "confusion",
						url: "https://pokeapi.co/api/v2/move-ailment/6/"
					  },
					  {
						name: "infatuation",
						url: "https://pokeapi.co/api/v2/move-ailment/7/"
					  },
					  {
						name: "trap",
						url: "https://pokeapi.co/api/v2/move-ailment/8/"
					  },
					  {
						name: "nightmare",
						url: "https://pokeapi.co/api/v2/move-ailment/9/"
					  },
					  {
						name: "torment",
						url: "https://pokeapi.co/api/v2/move-ailment/12/"
					  },
					  {
						name: "disable",
						url: "https://pokeapi.co/api/v2/move-ailment/13/"
					  },
					  {
						name: "yawn",
						url: "https://pokeapi.co/api/v2/move-ailment/14/"
					  },
					  {
						name: "heal-block",
						url: "https://pokeapi.co/api/v2/move-ailment/15/"
					  },
					  {
						name: "no-type-immunity",
						url: "https://pokeapi.co/api/v2/move-ailment/17/"
					  },
					  {
						name: "leech-seed",
						url: "https://pokeapi.co/api/v2/move-ailment/18/"
					  },
					  {
						name: "embargo",
						url: "https://pokeapi.co/api/v2/move-ailment/19/"
					  },
					  {
						name: "perish-song",
						url: "https://pokeapi.co/api/v2/move-ailment/20/"
					  },
					  {
						name: "ingrain",
						url: "https://pokeapi.co/api/v2/move-ailment/21/"
					  }
					]
				  }
			  }
			{
				{
					count: 14,
					next; null,
					previous; null,
					results; [
					  {
						name: "damage",
						url: "https://pokeapi.co/api/v2/move-category/0/"
					  },
					  {
						name: "ailment",
						url: "https://pokeapi.co/api/v2/move-category/1/"
					  },
					  {
						name: "net-good-stats",
						url: "https://pokeapi.co/api/v2/move-category/2/"
					  },
					  {
						name: "heal",
						url: "https://pokeapi.co/api/v2/move-category/3/"
					  },
					  {
						name: "damage+ailment",
						url: "https://pokeapi.co/api/v2/move-category/4/"
					  },
					  {
						name: "swagger",
						url: "https://pokeapi.co/api/v2/move-category/5/"
					  },
					  {
						name: "damage+lower",
						url: "https://pokeapi.co/api/v2/move-category/6/"
					  },
					  {
						name: "damage+raise",
						url: "https://pokeapi.co/api/v2/move-category/7/"
					  },
					  {
						name: "damage+heal",
						url: "https://pokeapi.co/api/v2/move-category/8/"
					  },
					  {
						name: "ohko",
						url: "https://pokeapi.co/api/v2/move-category/9/"
					  },
					  {
						name: "whole-field-effect",
						url: "https://pokeapi.co/api/v2/move-category/10/"
					  },
					  {
						name: "field-effect",
						url: "https://pokeapi.co/api/v2/move-category/11/"
					  },
					  {
						name: "force-switch",
						url: "https://pokeapi.co/api/v2/move-category/12/"
					  },
					  {
						name: "unique",
						url: "https://pokeapi.co/api/v2/move-category/13/"
					  }
					]
				  }
			}
			{
				{
					count: 3,
					next; null,
					previous; null,
					results; [
					  {
						name: "status",
						url: "https://pokeapi.co/api/v2/move-damage-class/1/"
					  },
					  {
						name: "physical",
						url: "https://pokeapi.co/api/v2/move-damage-class/2/"
					  },
					  {
						name: "special",
						url: "https://pokeapi.co/api/v2/move-damage-class/3/"
					  }
					]
				  }
			}
			{
				{
					count: 11,
					next; null,
					previous; null,
					results; [
					  {
						name: "level-up",
						url: "https://pokeapi.co/api/v2/move-learn-method/1/"
					  },
					  {
						name: "egg",
						url: "https://pokeapi.co/api/v2/move-learn-method/2/"
					  },
					  {
						name: "tutor",
						url: "https://pokeapi.co/api/v2/move-learn-method/3/"
					  },
					  {
						name: "machine",
						url: "https://pokeapi.co/api/v2/move-learn-method/4/"
					  },
					  {
						name: "stadium-surfing-pikachu",
						url: "https://pokeapi.co/api/v2/move-learn-method/5/"
					  },
					  {
						name: "light-ball-egg",
						url: "https://pokeapi.co/api/v2/move-learn-method/6/"
					  },
					  {
						name: "colosseum-purification",
						url: "https://pokeapi.co/api/v2/move-learn-method/7/"
					  },
					  {
						name: "xd-shadow",
						url: "https://pokeapi.co/api/v2/move-learn-method/8/"
					  },
					  {
						name: "xd-purification",
						url: "https://pokeapi.co/api/v2/move-learn-method/9/"
					  },
					  {
						name: "form-change",
						url: "https://pokeapi.co/api/v2/move-learn-method/10/"
					  },
					  {
						name: "zygarde-cube",
						url: "https://pokeapi.co/api/v2/move-learn-method/11/"
					  }
					]
				  }
			}
	  {
		{
			count: 16,
			next; null,
			previous; null,
			results; [
			  {
				name: "specific-move",
				url: "https://pokeapi.co/api/v2/move-target/1/"
			  },
			  {
				name: "selected-pokemon-me-first",
				url: "https://pokeapi.co/api/v2/move-target/2/"
			  },
			  {
				name: "ally",
				url: "https://pokeapi.co/api/v2/move-target/3/"
			  },
			  {
				name: "users-field",
				url: "https://pokeapi.co/api/v2/move-target/4/"
			  },
			  {
				name: "user-or-ally",
				url: "https://pokeapi.co/api/v2/move-target/5/"
			  },
			  {
				name: "opponents-field",
				url: "https://pokeapi.co/api/v2/move-target/6/"
			  },
			  {
				name: "user",
				url: "https://pokeapi.co/api/v2/move-target/7/"
			  },
			  {
				name: "random-opponent",
				url: "https://pokeapi.co/api/v2/move-target/8/"
			  },
			  {
				name: "all-other-pokemon",
				url: "https://pokeapi.co/api/v2/move-target/9/"
			  },
			  {
				name: "selected-pokemon",
				url: "https://pokeapi.co/api/v2/move-target/10/"
			  },
			  {
				name: "all-opponents",
				url: "https://pokeapi.co/api/v2/move-target/11/"
			  },
			  {
				name: "entire-field",
				url: "https://pokeapi.co/api/v2/move-target/12/"
			  },
			  {
				name: "user-and-allies",
				url: "https://pokeapi.co/api/v2/move-target/13/"
			  },
			  {
				name: "all-pokemon",
				url: "https://pokeapi.co/api/v2/move-target/14/"
			  },
			  {
				name: "all-allies",
				url: "https://pokeapi.co/api/v2/move-target/15/"
			  },
			  {
				name: "fainting-pokemon",
				url: "https://pokeapi.co/api/v2/move-target/16/"
			  }
			]
		  }
	  }
	  {
		{
			count: 358,
			next; "https://pokeapi.co/api/v2/ability/?offset=20&limit=20",
			previous; null,
			results; [
			  {
				name: "stench",
				url: "https://pokeapi.co/api/v2/ability/1/"
			  },
			  {
				name: "drizzle",
				url: "https://pokeapi.co/api/v2/ability/2/"
			  },
			  {
				name: "speed-boost",
				url: "https://pokeapi.co/api/v2/ability/3/"
			  },
			  {
				name: "battle-armor",
				url: "https://pokeapi.co/api/v2/ability/4/"
			  },
			  {
				name: "sturdy",
				url: "https://pokeapi.co/api/v2/ability/5/"
			  },
			  {
				name: "damp",
				url: "https://pokeapi.co/api/v2/ability/6/"
			  },
			  {
				name: "limber",
				url: "https://pokeapi.co/api/v2/ability/7/"
			  },
			  {
				name: "sand-veil",
				url: "https://pokeapi.co/api/v2/ability/8/"
			  },
			  {
				name: "static",
				url: "https://pokeapi.co/api/v2/ability/9/"
			  },
			  {
				name: "volt-absorb",
				url: "https://pokeapi.co/api/v2/ability/10/"
			  },
			  {
				name: "water-absorb",
				url: "https://pokeapi.co/api/v2/ability/11/"
			  },
			  {
				name: "oblivious",
				url: "https://pokeapi.co/api/v2/ability/12/"
			  },
			  {
				name: "cloud-nine",
				url: "https://pokeapi.co/api/v2/ability/13/"
			  },
			  {
				name: "compound-eyes",
				url: "https://pokeapi.co/api/v2/ability/14/"
			  },
			  {
				name: "insomnia",
				url: "https://pokeapi.co/api/v2/ability/15/"
			  },
			  {
				name: "color-change",
				url: "https://pokeapi.co/api/v2/ability/16/"
			  },
			  {
				name: "immunity",
				url: "https://pokeapi.co/api/v2/ability/17/"
			  },
			  {
				name: "flash-fire",
				url: "https://pokeapi.co/api/v2/ability/18/"
			  },
			  {
				name: "shield-dust",
				url: "https://pokeapi.co/api/v2/ability/19/"
			  },
			  {
				name: "own-tempo",
				url: "https://pokeapi.co/api/v2/ability/20/"
			  }
			]
		  }
	  }
	  {
		{
			count: 30,
			next; "https://pokeapi.co/api/v2/characteristic/?offset=20&limit=10",
			previous; null,
			results; [
			  {
				url: "https://pokeapi.co/api/v2/characteristic/1/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/2/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/3/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/4/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/5/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/6/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/7/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/8/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/9/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/10/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/11/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/12/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/13/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/14/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/15/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/16/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/17/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/18/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/19/"
			  },
			  {
				url: "https://pokeapi.co/api/v2/characteristic/20/"
			  }
			]
		  }
	  }
	  {
		{
			count: 15,
			next; null,
			previous; null,
			results; [
			  {
				name: "monster",
				url: "https://pokeapi.co/api/v2/egg-group/1/"
			  },
			  {
				name: "water1",
				url: "https://pokeapi.co/api/v2/egg-group/2/"
			  },
			  {
				name: "bug",
				url: "https://pokeapi.co/api/v2/egg-group/3/"
			  },
			  {
				name: "flying",
				url: "https://pokeapi.co/api/v2/egg-group/4/"
			  },
			  {
				name: "ground",
				url: "https://pokeapi.co/api/v2/egg-group/5/"
			  },
			  {
				name: "fairy",
				url: "https://pokeapi.co/api/v2/egg-group/6/"
			  },
			  {
				name: "plant",
				url: "https://pokeapi.co/api/v2/egg-group/7/"
			  },
			  {
				name: "humanshape",
				url: "https://pokeapi.co/api/v2/egg-group/8/"
			  },
			  {
				name: "water3",
				url: "https://pokeapi.co/api/v2/egg-group/9/"
			  },
			  {
				name: "mineral",
				url: "https://pokeapi.co/api/v2/egg-group/10/"
			  },
			  {
				name: "indeterminate",
				url: "https://pokeapi.co/api/v2/egg-group/11/"
			  },
			  {
				name: "water2",
				url: "https://pokeapi.co/api/v2/egg-group/12/"
			  },
			  {
				name: "ditto",
				url: "https://pokeapi.co/api/v2/egg-group/13/"
			  },
			  {
				name: "dragon",
				url: "https://pokeapi.co/api/v2/egg-group/14/"
			  },
			  {
				name: "no-eggs",
				url: "https://pokeapi.co/api/v2/egg-group/15/"
			  }
			]
		  }
	  }
	  {
		{
			count: 3,
			next; null,
			previous; null,
			results; [
			  {
				name: "female",
				url: "https://pokeapi.co/api/v2/gender/1/"
			  },
			  {
				name: "male",
				url: "https://pokeapi.co/api/v2/gender/2/"
			  },
			  {
				name: "genderless",
				url: "https://pokeapi.co/api/v2/gender/3/"
			  }
			]
		  }
	  }
	  {
		{
			count: 6,
			next; null,
			previous; null,
			results; [
			  {
				name: "slow",
				url: "https://pokeapi.co/api/v2/growth-rate/1/"
			  },
			  {
				name: "medium",
				url: "https://pokeapi.co/api/v2/growth-rate/2/"
			  },
			  {
				name: "fast",
				url: "https://pokeapi.co/api/v2/growth-rate/3/"
			  },
			  {
				name: "medium-slow",
				url: "https://pokeapi.co/api/v2/growth-rate/4/"
			  },
			  {
				name: "slow-then-very-fast",
				url: "https://pokeapi.co/api/v2/growth-rate/5/"
			  },
			  {
				name: "fast-then-very-slow",
				url: "https://pokeapi.co/api/v2/growth-rate/6/"
			  }
			]
		  }
	  }
	  {
		{
			count: 25,
			next; "https://pokeapi.co/api/v2/nature/?offset=20&limit=5",
			previous; null,
			results; [
			  {
				name: "hardy",
				url: "https://pokeapi.co/api/v2/nature/1/"
			  },
			  {
				name: "bold",
				url: "https://pokeapi.co/api/v2/nature/2/"
			  },
			  {
				name: "modest",
				url: "https://pokeapi.co/api/v2/nature/3/"
			  },
			  {
				name: "calm",
				url: "https://pokeapi.co/api/v2/nature/4/"
			  },
			  {
				name: "timid",
				url: "https://pokeapi.co/api/v2/nature/5/"
			  },
			  {
				name: "lonely",
				url: "https://pokeapi.co/api/v2/nature/6/"
			  },
			  {
				name: "docile",
				url: "https://pokeapi.co/api/v2/nature/7/"
			  },
			  {
				name: "mild",
				url: "https://pokeapi.co/api/v2/nature/8/"
			  },
			  {
				name: "gentle",
				url: "https://pokeapi.co/api/v2/nature/9/"
			  },
			  {
				name: "hasty",
				url: "https://pokeapi.co/api/v2/nature/10/"
			  },
			  {
				name: "adamant",
				url: "https://pokeapi.co/api/v2/nature/11/"
			  },
			  {
				name: "impish",
				url: "https://pokeapi.co/api/v2/nature/12/"
			  },
			  {
				name: "bashful",
				url: "https://pokeapi.co/api/v2/nature/13/"
			  },
			  {
				name: "careful",
				url: "https://pokeapi.co/api/v2/nature/14/"
			  },
			  {
				name: "rash",
				url: "https://pokeapi.co/api/v2/nature/15/"
			  },
			  {
				name: "jolly",
				url: "https://pokeapi.co/api/v2/nature/16/"
			  },
			  {
				name: "naughty",
				url: "https://pokeapi.co/api/v2/nature/17/"
			  },
			  {
				name: "lax",
				url: "https://pokeapi.co/api/v2/nature/18/"
			  },
			  {
				mame: "quirky",
				url: "https://pokeapi.co/api/v2/nature/19/"
			  },
			  {
				name: "naive",
				url: "https://pokeapi.co/api/v2/nature/20/"
			  }
			]
		  }
	  }
	  {
		{
			count: 5,
			next; null,
			previous; null,
			results; [
			  {
				name: "speed",
				url: "https://pokeapi.co/api/v2/pokeathlon-stat/1/"
			  },
			  {
				name: "power",
				url: "https://pokeapi.co/api/v2/pokeathlon-stat/2/"
			  },
			  {
				name: "skill",
				url: "https://pokeapi.co/api/v2/pokeathlon-stat/3/"
			  },
			  {
				name: "stamina",
				url: "https://pokeapi.co/api/v2/pokeathlon-stat/4/"
			  },
			  {
				name: "jump",
				url: "https://pokeapi.co/api/v2/pokeathlon-stat/5/"
			  }
			]
		  }
	  }
	  {
		count; 1279,
		next; "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
		previous; null,
		results; [
		  {
			name: "bulbasaur",
			url: "https://pokeapi.co/api/v2/pokemon/1/"
		  },
		  {
			name: "ivysaur",
			url: "https://pokeapi.co/api/v2/pokemon/2/"
		  },
		  {
			name: "venusaur",
			url: "https://pokeapi.co/api/v2/pokemon/3/"
		  },
		  {
			name: "charmander",
			url: "https://pokeapi.co/api/v2/pokemon/4/"
		  },
		  {
			name: "charmeleon",
			url: "https://pokeapi.co/api/v2/pokemon/5/"
		  },
		  {
			name: "charizard",
			url: "https://pokeapi.co/api/v2/pokemon/6/"
		  },
		  {
			name: "squirtle",
			url: "https://pokeapi.co/api/v2/pokemon/7/"
		  },
		  {
			name: "wartortle",
			url: "https://pokeapi.co/api/v2/pokemon/8/"
		  },
		  {
			name: "blastoise",
			url: "https://pokeapi.co/api/v2/pokemon/9/"
		  },
		  {
			name: "caterpie",
			url: "https://pokeapi.co/api/v2/pokemon/10/"
		  },
		  {
			name: "metapod",
			url: "https://pokeapi.co/api/v2/pokemon/11/"
		  },
		  {
			name: "butterfree",
			url: "https://pokeapi.co/api/v2/pokemon/12/"
		  },
		  {
			name: "weedle",
			url: "https://pokeapi.co/api/v2/pokemon/13/"
		  },
		  {
			name: "kakuna",
			url: "https://pokeapi.co/api/v2/pokemon/14/"
		  },
		  {
			name: "beedrill",
			url: "https://pokeapi.co/api/v2/pokemon/15/"
		  },
		  {
			name: "pidgey",
			url: "https://pokeapi.co/api/v2/pokemon/16/"
		  },
		  {
			name: "pidgeotto",
			url: "https://pokeapi.co/api/v2/pokemon/17/"
		  },
		  {
			name: "pidgeot",
			url: "https://pokeapi.co/api/v2/pokemon/18/"
		  },
		  {
			name: "rattata",
			url: "https://pokeapi.co/api/v2/pokemon/19/"
		  },
		  {
			name: "raticate",
			url: "https://pokeapi.co/api/v2/pokemon/20/"
		}
	]
  }
{
	{
		count: 10,
		next; null,
		previous; null,
		results; [
		  {
			name: "black",
			url: "https://pokeapi.co/api/v2/pokemon-color/1/"
		  },
		  {
			name: "blue",
			url: "https://pokeapi.co/api/v2/pokemon-color/2/"
		  },
		  {
			name: "brown",
			url: "https://pokeapi.co/api/v2/pokemon-color/3/"
		  },
		  {
			name: "gray",
			url: "https://pokeapi.co/api/v2/pokemon-color/4/"
		  },
		  {
			name: "green",
			url: "https://pokeapi.co/api/v2/pokemon-color/5/"
		  },
		  {
			name: "pink",
			url: "https://pokeapi.co/api/v2/pokemon-color/6/"
		  },
		  {
			name: "purple",
			url: "https://pokeapi.co/api/v2/pokemon-color/7/"
		  },
		  {
			name: "red",
			url: "https://pokeapi.co/api/v2/pokemon-color/8/"
		  },
		  {
			name: "white",
			url: "https://pokeapi.co/api/v2/pokemon-color/9/"
		  },
		  {
			name: "yellow",
			url: "https://pokeapi.co/api/v2/pokemon-color/10/"
		  }
		]
	  }
}
{
	{
		count: 1448,
		next; "https://pokeapi.co/api/v2/pokemon-form/?offset=20&limit=20",
		previous; null,
		results; [
		  {
			name: "bulbasaur",
			url: "https://pokeapi.co/api/v2/pokemon-form/1/"
		  },
		  {
			name: "ivysaur",
			url: "https://pokeapi.co/api/v2/pokemon-form/2/"
		  },
		  {
			name: "venusaur",
			url: "https://pokeapi.co/api/v2/pokemon-form/3/"
		  },
		  {
			name: "charmander",
			url: "https://pokeapi.co/api/v2/pokemon-form/4/"
		  },
		  {
			name: "charmeleon",
			url: "https://pokeapi.co/api/v2/pokemon-form/5/"
		  },
		  {
			name: "charizard",
			url: "https://pokeapi.co/api/v2/pokemon-form/6/"
		  },
		  {
			name: "squirtle",
			url: "https://pokeapi.co/api/v2/pokemon-form/7/"
		  },
		  {
			name: "wartortle",
			url: "https://pokeapi.co/api/v2/pokemon-form/8/"
		  },
		  {
			name: "blastoise",
			url: "https://pokeapi.co/api/v2/pokemon-form/9/"
		  },
		  {
			name: "caterpie",
			url: "https://pokeapi.co/api/v2/pokemon-form/10/"
		  },
		  {
			name: "metapod",
			url: "https://pokeapi.co/api/v2/pokemon-form/11/"
		  },
		  {
			name: "butterfree",
			url: "https://pokeapi.co/api/v2/pokemon-form/12/"
		  },
		  {
			name: "weedle",
			url: "https://pokeapi.co/api/v2/pokemon-form/13/"
		  },
		  {
			name: "kakuna",
			url: "https://pokeapi.co/api/v2/pokemon-form/14/"
		  },
		  {
			name: "beedrill",
			url: "https://pokeapi.co/api/v2/pokemon-form/15/"
		  },
		  {
			name: "pidgey",
			url: "https://pokeapi.co/api/v2/pokemon-form/16/"
		  },
		  {
			name: "pidgeotto",
			url: "https://pokeapi.co/api/v2/pokemon-form/17/"
		  },
		  {
			name: "pidgeot",
			url: "https://pokeapi.co/api/v2/pokemon-form/18/"
		  },
		  {
			name: "rattata",
			url: "https://pokeapi.co/api/v2/pokemon-form/19/"
		  },
		  {
			name: "raticate",
			url: "https://pokeapi.co/api/v2/pokemon-form/20/"
		  }
		]
	  }
}
{
	{
		count: 9,
		next; null,
		previous; null,
		results; [
		  {
			name: "cave",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/1/"
		  },
		  {
			name: "forest",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/2/"
		  },
		  {
			name: "grassland",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/3/"
		  },
		  {
			name: "mountain",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/4/"
		  },
		  {
			name: "rare",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/5/"
		  },
		  {
			name: "rough-terrain",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/6/"
		  },
		  {
			name: "sea",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/7/"
		  },
		  {
			name: "urban",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/8/"
		  },
		  {
			name: "waters-edge",
			url: "https://pokeapi.co/api/v2/pokemon-habitat/9/"
		  }
		]
	  }
}
{
	{
		count: 14,
		next; null,
		previous; null,
		results; [
		  {
			name: "ball",
			url: "https://pokeapi.co/api/v2/pokemon-shape/1/"
		  },
		  {
			name: "squiggle",
			url: "https://pokeapi.co/api/v2/pokemon-shape/2/"
		  },
		  {
			name: "fish",
			url: "https://pokeapi.co/api/v2/pokemon-shape/3/"
		  },
		  {
			name: "arms",
			url: "https://pokeapi.co/api/v2/pokemon-shape/4/"
		  },
		  {
			mame: "blob",
			url: "https://pokeapi.co/api/v2/pokemon-shape/5/"
		  },
		  {
			name: "upright",
			url: "https://pokeapi.co/api/v2/pokemon-shape/6/"
		  },
		  {
			name: "legs",
			url: "https://pokeapi.co/api/v2/pokemon-shape/7/"
		  },
		  {
			name: "quadruped",
			url: "https://pokeapi.co/api/v2/pokemon-shape/8/"
		  },
		  {
			name: "wings",
			url: "https://pokeapi.co/api/v2/pokemon-shape/9/"
		  },
		  {
			name: "tentacles",
			url: "https://pokeapi.co/api/v2/pokemon-shape/10/"
		  },
		  {
			name: "heads",
			url: "https://pokeapi.co/api/v2/pokemon-shape/11/"
		  },
		  {
			name: "humanoid",
			url: "https://pokeapi.co/api/v2/pokemon-shape/12/"
		  },
		  {
			name: "bug-wings",
			url: "https://pokeapi.co/api/v2/pokemon-shape/13/"
		  },
		  {
			name: "armor",
			url: "https://pokeapi.co/api/v2/pokemon-shape/14/"
		  }
		]
	  }
}
{
	{
		count: 1008,
		next; "https://pokeapi.co/api/v2/pokemon-species/?offset=20&limit=20",
		previous; null,
		results; [
		  {
			name: "bulbasaur",
			url: "https://pokeapi.co/api/v2/pokemon-species/1/"
		  },
		  {
			name: "ivysaur",
			url: "https://pokeapi.co/api/v2/pokemon-species/2/"
		  },
		  {
			name: "venusaur",
			url: "https://pokeapi.co/api/v2/pokemon-species/3/"
		  },
		  {
			name: "charmander",
			url: "https://pokeapi.co/api/v2/pokemon-species/4/"
		  },
		  {
			name: "charmeleon",
			url: "https://pokeapi.co/api/v2/pokemon-species/5/"
		  },
		  {
			name: "charizard",
			url: "https://pokeapi.co/api/v2/pokemon-species/6/"
		  },
		  {
			name: "squirtle",
			url: "https://pokeapi.co/api/v2/pokemon-species/7/"
		  },
		  {
			name: "wartortle",
			url: "https://pokeapi.co/api/v2/pokemon-species/8/"
		  },
		  {
			name: "blastoise",
			url: "https://pokeapi.co/api/v2/pokemon-species/9/"
		  },
		  {
			name: "caterpie",
			url: "https://pokeapi.co/api/v2/pokemon-species/10/"
		  },
		  {
			name: "metapod",
			url: "https://pokeapi.co/api/v2/pokemon-species/11/"
		  },
		  {
			name: "butterfree",
			url: "https://pokeapi.co/api/v2/pokemon-species/12/"
		  },
		  {
			name: "weedle",
			url: "https://pokeapi.co/api/v2/pokemon-species/13/"
		  },
		  {
			name: "kakuna",
			url: "https://pokeapi.co/api/v2/pokemon-species/14/"
		  },
		  {
			name: "beedrill",
			url: "https://pokeapi.co/api/v2/pokemon-species/15/"
		  },
		  {
			name: "pidgey",
			url: "https://pokeapi.co/api/v2/pokemon-species/16/"
		  },
		  {
			name: "pidgeotto",
			url: "https://pokeapi.co/api/v2/pokemon-species/17/"
		  },
		  {
			name: "pidgeot",
			url: "https://pokeapi.co/api/v2/pokemon-species/18/"
		  },
		  {
			name: "rattata",
			url: "https://pokeapi.co/api/v2/pokemon-species/19/"
		  },
		  {
			name: "raticate",
			url: "https://pokeapi.co/api/v2/pokemon-species/20/"
		  }
		]
	  }
}
{
	{
		count: 8,
		next; null,
		previous; null,
		results; [
		  {
			name: "hp",
			url: "https://pokeapi.co/api/v2/stat/1/"
		  },
		  {
			name: "attack",
			url: "https://pokeapi.co/api/v2/stat/2/"
		  },
		  {
			mame: "defense",
			url: "https://pokeapi.co/api/v2/stat/3/"
		  },
		  {
			name: "special-attack",
			url: "https://pokeapi.co/api/v2/stat/4/"
		  },
		  {
			name: "special-defense",
			url: "https://pokeapi.co/api/v2/stat/5/"
		  },
		  {
			name: "speed",
			url: "https://pokeapi.co/api/v2/stat/6/"
		  },
		  {
			name: "accuracy",
			url: "https://pokeapi.co/api/v2/stat/7/"
		  },
		  {
			name: "evasion",
			url: "https://pokeapi.co/api/v2/stat/8/"
		  }
		]
	  }
}
{
	{
		count: 20,
		next; null,
		previous; null,
		results; [
		  {
			name: "normal",
			url: "https://pokeapi.co/api/v2/type/1/"
		  },
		  {
			name: "fighting",
			url: "https://pokeapi.co/api/v2/type/2/"
		  },
		  {
			name: "flying",
			url: "https://pokeapi.co/api/v2/type/3/"
		  },
		  {
			name: "poison",
			url: "https://pokeapi.co/api/v2/type/4/"
		  },
		  {
			name: "ground",
			url: "https://pokeapi.co/api/v2/type/5/"
		  },
		  {
			name: "rock",
			url: "https://pokeapi.co/api/v2/type/6/"
		  },
		  {
			name: "bug",
			url: "https://pokeapi.co/api/v2/type/7/"
		  },
		  {
			name: "ghost",
			url: "https://pokeapi.co/api/v2/type/8/"
		  },
		  {
			mame: "steel",
			url: "https://pokeapi.co/api/v2/type/9/"
		  },
		  {
			name: "fire",
			url: "https://pokeapi.co/api/v2/type/10/"
		  },
		  {
			name: "water",
			url: "https://pokeapi.co/api/v2/type/11/"
		  },
		  {
			name: "grass",
			url: "https://pokeapi.co/api/v2/type/12/"
		  },
		  {
			name: "electric",
			url: "https://pokeapi.co/api/v2/type/13/"
		  },
		  {
			name: "psychic",
			url: "https://pokeapi.co/api/v2/type/14/"
		  },
		  {
			name: "ice",
			url: "https://pokeapi.co/api/v2/type/15/"
		  },
		  {
			name: "dragon",
			url: "https://pokeapi.co/api/v2/type/16/"
		  },
		  {
			name: "dark",
			url: "https://pokeapi.co/api/v2/type/17/"
		  },
		  {
			name: "fairy",
			url: "https://pokeapi.co/api/v2/type/18/"
		  },
		  {
			name: "unknown",
			url: "https://pokeapi.co/api/v2/type/10001/"
		  },
		  {
			name: "shadow",
			url: "https://pokeapi.co/api/v2/type/10002/"
		  }
		]
	  }
}
{
	{
		count: 13,
		next; null,
		previous; null,
		results; [
		  {
			name: "ja-Hrkt",
			url: "https://pokeapi.co/api/v2/language/1/"
		  },
		  {
			name: "roomaji",
			url: "https://pokeapi.co/api/v2/language/2/"
		  },
		  {
			name: "ko",
			url: "https://pokeapi.co/api/v2/language/3/"
		  },
		  {
			name: "zh-Hant",
			url: "https://pokeapi.co/api/v2/language/4/"
		  },
		  {
			name: "fr",
			url: "https://pokeapi.co/api/v2/language/5/"
		  },
		  {
			name: "de",
			url: "https://pokeapi.co/api/v2/language/6/"
		  },
		  {
			name: "es",
			url: "https://pokeapi.co/api/v2/language/7/"
		  },
		  {
			name: "it",
			url: "https://pokeapi.co/api/v2/language/8/"
		  },
		  {
			name: "en",
			url: "https://pokeapi.co/api/v2/language/9/"
		  },
		  {
			name: "cs",
			url: "https://pokeapi.co/api/v2/language/10/"
		  },
		  {
			name: "ja",
			url: "https://pokeapi.co/api/v2/language/11/"
		  },
		  {
			name: "zh-Hans",
			url: "https://pokeapi.co/api/v2/language/12/"
		  },
		  {
			name: "pt-BR",
			url: "https://pokeapi.co/api/v2/language/13/"
		  }
		]
	  }
}