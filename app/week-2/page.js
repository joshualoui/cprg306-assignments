import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />

      <p>
        Link to home page--{">"}{" "}
        <Link className="hover:text-sky-400 underline" href="/">
          Home
        </Link>{" "}
      </p>
    </main>
  );
}
