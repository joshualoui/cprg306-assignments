"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      <div>
        {user ? (
          <div>
            {" "}
            <h1 className="font-bold text-teal-600 text-4xl">
              Your GitHub information
            </h1>
            {user.displayName} do you want to:{" "}
            <button
              className="hover:text-sky-400 underline"
              onClick={firebaseSignOut}
            >
              Log Out?
            </button>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-teal-600 text-4xl">Shopping List</h1>
            <button
              className="hover:text-sky-400 underline"
              onClick={gitHubSignIn}
            >
              Sign In
            </button>{" "}
            to view the shopping list!
          </div>
        )}
      </div>
      {user ? (
        <div>
          Logged in as: {user.displayName}. <p>Email: {user.email}.</p> Last
          time you signed in was: {user.metadata.lastSignInTime}.{" "}
          <p>
            {" "}
            Your GitHub picture is
            <img src={user.photoURL} />
          </p>{" "}
          Come view our{" "}
          <Link
            className="hover:text-sky-400 underline"
            href="week-9/shopping-list"
          >
            Secure Shopping List Page!
          </Link>
        </div>
      ) : (
        <div>
          Try and get into this page without login.{" "}
          <Link
            className="hover:text-sky-400 underline"
            href="week-9/shopping-list"
          >
            Secure Shopping List Page
          </Link>
        </div>
      )}
    </main>
  );
}
