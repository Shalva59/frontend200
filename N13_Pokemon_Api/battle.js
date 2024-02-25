const id = new URLSearchParams(window.location.search).get("id");

console.log(id);

const split_string = id.split(',');
console.log(split_string);


const poke_container = document.getElementById("poke_contianer");

const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

const main_types = Object.keys(colours);




const fetchPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    createPokemonCard(data);
}

split_string.map((id) => {
    fetchPokemons(id);
});


const createPokemonCard = (pokemon) => {
    // console.log(pokemon)

    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const poke_types = pokemon.types.map((type) => type.type.name);

    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    console.log(type);

    //console.log(poke_types);

    const color = colours[type];
    pokemonEl.style.backgroundColor = color;

    const id = pokemon.id.toString().padStart(3, "0");

    const pokemonInnerHtml =
        `
    <div class="img-container">
        <img src="${pokemon.sprites.front_default}" alt="">
    </div>

    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${pokemon.name}</h3>
    </div>
    `;

    pokemonEl.addEventListener("contextmenu", (e) => {
        e.preventDefault(); // Prevent the default context menu

        // Code to remove any existing custom menu goes here

        // Create the custom menu
        const menu = document.createElement("div");
        menu.style.position = "absolute";
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;
        menu.style.zIndex = "1000"; // Ensure the menu is above other elements
        menu.innerHTML = `
          <div class="row">
            <div class="btn bten_view">
              <button id="viewDetails">View Details</button>
              </div>
              <div class="btn btn_choose">
              <button id="choosePokemon">Choose Pokemon</button>
              </div>
          </div>
          `;

        document.body.appendChild(menu);

        // Add event listeners for your buttons
        document.getElementById("viewDetails").addEventListener("click", () => {
            window.location.href = `description.html?id=${pokemon.id}`;
            // Remove the menu after selection
            menu.remove();
        });

        document.getElementById("choosePokemon").addEventListener("click", () => {
            // Implement add multiple pokemons functionality

            prokeArr.push(pokemon.id);

            if (prokeArr.length < 5) {
                console.log(prokeArr);
            } else if (prokeArr.length == 5) {
                startTeam.style.display = "block";
                startTeam.addEventListener("click", () => {
                    window.location.href = `battle.html?id=${prokeArr}`;
                });
            } else {
                alert("You can choose only 5 pokemons");
            }

            // Remove the menu after selection
            menu.remove();
        });

        // Optional: Remove the menu if the user clicks elsewhere on the page
        document.addEventListener(
            "click",
            (event) => {
                if (!menu.contains(event.target)) {
                    menu.remove();
                }
            }, {
                once: true
            },
        );
    });

    pokemonEl.innerHTML = pokemonInnerHtml;

    poke_container.appendChild(pokemonEl);
}