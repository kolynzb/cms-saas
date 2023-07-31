import { auth } from "@config/firebase";
import { signOut } from "firebase/auth";
import React from "react";

type Props = {};

const SignOutBtn = (props: Props) => {
  return <button onClick={() => signOut(auth)}>Log Out</button>;
};

export default SignOutBtn;

// {user ? (
//   <Button onClick={() => signOut(auth)}>Log Out</Button>
//   ) : (
//     {/* Show the auth buttons */}
//     [...]
//   )}
