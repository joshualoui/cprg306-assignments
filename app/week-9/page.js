"use client";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      <p>Not logged into account page</p>

      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Log Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In</button>
        )}
      </p>
    </main>
  );
}
