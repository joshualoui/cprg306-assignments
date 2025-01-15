import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Week 2 Demo</h1>
      <p>Demo web page, trying things out</p>

      {/* Old way of linking to week 2 page: */}
      <p>Link to week 2 page: <a href="week-2">Weak 2 Page here</a> </p>

      {/* New way of linking to week 2 page: */}
      <p>Link to week 2 page: <Link href="week-2">Weak 2 Page here</Link> </p>

    </div>
  );
}