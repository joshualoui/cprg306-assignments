const fetchCards = async (name, setCards) => {
  try {
    const apiCall = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${name}`
    );
    const pokemon = await apiCall.json();
    setCards(pokemon.data);
  } catch (error) {
    console.error("Error fetching cards:", error);
    setCards([]);
  }
};
export default fetchCards;
