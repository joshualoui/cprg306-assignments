"use client";
import NewItem from "./new-item.js";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <NewItem />
      <p>
        Link to home page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="/">
          Home
        </Link>{" "}
      </p>
    </main>
  );
}
