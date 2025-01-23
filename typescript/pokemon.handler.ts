import { Pokemon } from "./pokemon.interface";

export class PokemonHandler {
    poke1: Pokemon = {
        name: "",
        hp: 0,
        attack: 0,
        defense: 0,
        type: "",
        img: "",
    };
    poke2: Pokemon = {
        name: "",
        hp: 0,
        attack: 0,
        defense: 0,
        type: "",
        img: "",
    };

    poke1ImgElement = document.querySelector<HTMLImageElement>(".pokemon-1__img")!;
    poke1NameElement = document.querySelector<HTMLElement>(".pokemon-1__name")!;
    poke1HpElement = document.querySelector<HTMLElement>(".pokemon-1__hp")!;
    poke1AttackElement = document.querySelector<HTMLElement>(".pokemon-1__attack")!;
    poke1DefenseElement = document.querySelector<HTMLElement>(".pokemon-1__defense")!;
    poke1TypeElement = document.querySelector<HTMLElement>(".pokemon-1__type")!;
    poke2ImgElement = document.querySelector<HTMLImageElement>(".pokemon-2__img")!;
    poke2NameElement = document.querySelector<HTMLElement>(".pokemon-2__name")!;
    poke2HpElement = document.querySelector<HTMLElement>(".pokemon-2__hp")!;
    poke2AttackElement = document.querySelector<HTMLElement>(".pokemon-2__attack")!;
    poke2DefenseElement = document.querySelector<HTMLElement>(".pokemon-2__defense")!;
    poke2TypeElement = document.querySelector<HTMLElement>(".pokemon-2__type")!;
    modalText = document.querySelector<HTMLElement>(".modal__text")!;
    catchButton = document.querySelector<HTMLButtonElement>(".button__catch")!;
    fightButton = document.querySelector<HTMLButtonElement>(".button__fight")!;
    modalButton = document.querySelector<HTMLButtonElement>(".button__modal")!;

    getRandomNumber(numMin: number, numMax: number): number {
        return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    };

    async getPokemon(pokeID: number): Promise<Pokemon> {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
        const data = await response.json();
        let pokemon: Pokemon = {
            img: data.sprites.other["official-artwork"]["front_default"],
            name: data.name,
            hp: data.stats[0]["base_stat"],
            attack: data.stats[1]["base_stat"],
            defense: data.stats[2]["base_stat"],
            type: data.types[0].type.name,
        } as Pokemon;
        return pokemon;
    }
}