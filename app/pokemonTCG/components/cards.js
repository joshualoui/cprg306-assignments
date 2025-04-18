// const fetchCards = async (name, setCards) => {
//   try {
//     const apiCall = await fetch(
//       `https://api.pokemontcg.io/v2/cards?q=name:${name}`
//     );
//     const pokemon = await apiCall.json();
//     setCards(pokemon.data);
//   } catch (error) {
//     console.error("Error fetching cards:", error);
//     setCards([]);
//   }
// };
// export default fetchCards;

import pokemon from "../lib/pokemonClient";

const fetchCards = async (name, setCards) => {
  try {
    const result = await pokemon.card.where({ q: `name:${name}` });
    setCards(result.data);
  } catch (error) {
    console.error("Error fetching cards:", error);
    setCards([]);
  }
};

export default fetchCards;
