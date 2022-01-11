const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokemon.filter( p => p.name[0] === "B" );

const pkmnIds = pokemon.map( p => p.id );


console.log("***** ID divisible by 3 *****")
const divByThree = pokemon.filter( pkmn => pkmn.id % 3 === 0);
console.log(divByThree);

console.log("***** Includes Fire Type *****");
const fireType = pokemon.filter( pkmn => pkmn.types.includes("fire") );
console.log(fireType);

console.log("***** More than one Type *****");
const multiType = pokemon.filter(pkmn => pkmn.types.length > 1);
console.log(multiType);

console.log("***** Names *****");
const pkmnNames = pokemon.map( pkmn => pkmn.name);
console.log(pkmnNames);

console.log("***** Names with ID Greater than 99 *****");
const greaterThan99 = pokemon.filter(pkmn => pkmn.id > 99).map( pkmn => pkmn.name);
console.log(greaterThan99);

console.log("***** Only Poison Type *****");
const poisonType = pokemon.filter( pkmn => pkmn.types == "poison").map( pkmn => pkmn.name);
console.log(poisonType);

console.log("***** Flying as second type *****");
const flyingSecond = pokemon.filter( pkmn => pkmn.types[1] == "flying").map(pkmn => pkmn.types[0]);
console.log(flyingSecond);

console.log("***** Number of Normal type *****")
const numberOfNormal = pokemon.filter( pkmn => pkmn.types.includes("normal")).length;
console.log(numberOfNormal);