const poke_container = document.getElementById("poke_container");
const pokemon_count = 70;


const getPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await fetchPokemons(i);
    }
}

const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

const main_types = Object.keys(colours); // ობიექტის Property მარცხენა მხარე გადაიყვანა მასივად
console.log(main_types);

const main_types_color = Object.values(colours); // ობიექტის value მარჯვენა მხარეს გადაიყვანს მასივად
console.log(main_types_color);




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


    pokemonEl.addEventListener("click", () => {
        window.location.href = `description.html?id=${pokemon.id}`;
    });


    pokemonEl.innerHTML = pokemonInnerHtml;

    poke_container.appendChild(pokemonEl);
}


const fetchPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    createPokemonCard(data);
}

getPokemons();




// TODO: მარჯვენა კლიკით გავხსნათ მენიუ 1) აღწერა  2)პოკემონის არჩევა

//TODO: 5 პოკემონი ავირჩიოთ მინიმუმ
//TODO: როცა ავირჩევთ 5 პოკემონს გადავა სხვა გვერდზე 
//TODO: შემდეგ გვერდზე გადასვლისას გამოვიყენოთ ლოკალ სტორიჯი



