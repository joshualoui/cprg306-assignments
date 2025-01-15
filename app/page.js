import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      {/* Old way of linking to week 2 page: */}
      {/* <p>Link to week 2 page: <a href="week-2">Weak 2 Page here</a> </p> */}

      {/* New way of linking to week 2 page: */}
      <p>Link to week 2 page--{">"} <Link href="week-2">Here</Link> </p>
    </div>
  );
}