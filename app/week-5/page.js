"use client";
import NewItem from "./new-item.js";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center p-2">
      <p>
        <Link className="hover:text-sky-400 underline" href="/">
          Home
        </Link>{" "}
      </p>
      <NewItem />
    </main>
  );
}
