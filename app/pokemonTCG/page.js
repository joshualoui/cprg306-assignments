"use client";
import SearchBar from "./components/searchbar";
import { useEffect, useState } from "react";
import fetchCards from "./components/cards";
import api from "./lib/queryBuilder";
import axios from "axios";
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 1) {
      fetchCards(searchTerm, setCards);
    } else {
      setCards([]);
    }
  }, [searchTerm]);

  // useEffect(() => {
  //   if (searchTerm.length > 1) {
  //     fetchCards(searchTerm).then(setCards);
  //   } else {
  //     setCards([]);
  //   }
  // }, [searchTerm]);

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
