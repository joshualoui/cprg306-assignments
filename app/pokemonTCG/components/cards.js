import pokemon from "../lib/pokemonClient";

const fetchCards = async (name, page = 1, pageSize = 20) => {
  try {
    const result = await pokemon.card.where({
      q: `name:${name}`,
      page,
      pageSize,
    });
    return {
      cards: result.data,
      totalCount: result.totalCount,
    };
  } catch (error) {
    console.error("Error fetching cards:", error);
    return {
      cards: [],
      totalCount: 0,
    };
  }
};

export default fetchCards;
