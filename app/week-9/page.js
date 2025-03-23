"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      <p>
        {user ? (
          <div>
            {" "}
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
            <button
              className="hover:text-sky-400 underline"
              onClick={gitHubSignIn}
            >
              Sign In
            </button>
          </div>
        )}
      </p>
      {user ? (
        <div>
          Logged in as {user.displayName}. Email: {user.email}. Last time you
          signed in was: {user.metadata.lastSignInTime}. Your pfp is
          <img src={user.photoURL} /> Come view our{" "}
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
