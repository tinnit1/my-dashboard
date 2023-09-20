import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";
import Image from "next/image";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemon = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  // throw new Error("Error");
  return pokemon;
};

export default async function PokemonsPage() {
  const pokemon = await getPokemons(151);
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">List of Pokemons <small>static</small> </span>
        <PokemonGrid pokemons={pokemon} />
    </div>
  );
}
