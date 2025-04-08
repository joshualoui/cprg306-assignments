"use client";
import SearchBar from "./components/searchbar";
import { useEffect, useState } from "react";
import fetchCards from "./components/cards";
import api from "./lib/queryBuilder";
import axios from "axios";
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);

  const fetchCards = async (name) => {
    try {
      const res = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${name}`
      );
      const pokemon = await res.json();
      setCards(pokemon.data); // Set the fetched cards
    } catch (error) {
      console.error("Error fetching cards:", error);
      setCards([]); // Reset cards in case of an error
    }
  };

  useEffect(() => {
    if (searchTerm.length > 1) {
      fetchCards(searchTerm);
    } else {
      setCards([]);
    }
  }, [searchTerm]);

  return (
    <main>
      <h1 className="font-bold">Pokémon TCG Display</h1>

      {/* <Card /> */}
      <SearchBar onSearch={setSearchTerm} />

      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <img src={card.images.large} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
      {/* <CardList cards={cards}/> */}
    </main>
  );
}
