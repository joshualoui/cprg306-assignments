"use client";
import SearchBar from "./components/searchbar";
import { useEffect, useState } from "react";
import fetchCards from "./components/cards";
import api from "./lib/queryBuilder";
import axios from "axios";
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //display 10 cards on 1 page and change each search or page change

  useEffect(() => {
    if (searchTerm.length > 1) {
      fetchCards(searchTerm, page, 10).then(({ cards, totalCount }) => {
        setCards(cards);
        setTotalPages(Math.ceil(totalCount / 10));
      });
    } else {
      setCards([]);
      setPage(1);
      setTotalPages(1);
    }
  }, [searchTerm, page]);

  //reset the page to 1 when the search term changes
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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
      <div>
        <button
          className={`p-2 m-2 rounded-full ${"bg-[#3b4cca]"} `}
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`p-2 m-2 rounded-full ${"bg-[#3b4cca]"} `}
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </main>
  );
}
