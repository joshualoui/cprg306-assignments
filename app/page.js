import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-500">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      {/* Old way of linking to week 2 page: */}
      {/* <p>Link to week 2 page: <a href="week-2">Weak 2 Page here</a> </p> */}

      {/* New way of linking to week 2 page: */}

      <p>
        Link to week 2 page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="week-2">
          Here
        </Link>{" "}
      </p>
      <p>
        Link to week 3 page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="week-3">
          Here
        </Link>{" "}
      </p>
      <p>
        Link to week 4 page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="week-4">
          Here
        </Link>{" "}
      </p>
      <p>
        Link to week 5 page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="week-5">
          Here
        </Link>{" "}
      </p>
      <p>
        Link to week 6 page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="week-6">
          Here
        </Link>{" "}
      </p>
      <p>
        Link to week 7 page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="week-7">
          Here
        </Link>{" "}
      </p>
    </div>
  );
}
