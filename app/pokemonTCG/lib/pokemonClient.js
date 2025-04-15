import pokemon from "pokemontcgsdk";

pokemon.configure({ apiKey: process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY });

export default pokemon;
