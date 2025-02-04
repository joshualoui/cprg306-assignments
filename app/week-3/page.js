import List from "./item-list.js";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-teal-600 text-4xl">Shopping List</h1>
      <p className="hover:text-sky-400 underline">
        <Link href="/">Home</Link>{" "}
      </p>
      <List />
    </main>
  );
}
