"use client";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { auth } from "@config/firebase";
import { EmailIcon, PasswordIcon } from "@components/icons";
import site from "@config/site.json";
import MiniLoadingSpinner from "@components/icons/MiniLoadingSpinner";
import FieldErrorMessage from "@components/landing/forms/FieldErrorMessage";
import SignInWithGoogleBtn from "@components/buttons/auth/SignInWithGoogleBtn";

type Props = {};

const SignIn = (props: Props) => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, fbError] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(signInForm.email, signInForm.password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="relative py-16 ">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img
                  src={site.logo}
                  loading="lazy"
                  className="w-10"
                  alt="logo"
                />
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Sign in to unlock the <br /> best of logo.
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="mt-16 grid space-y-4">
                <SignInWithGoogleBtn />

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <EmailIcon />
                  <input
                    className="pl-2 outline-none border-none"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <PasswordIcon />
                  <input
                    className="pl-2 outline-none border-none"
                    name="password"
                    type="password"
                    id=""
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                {fbError && (
                  <FieldErrorMessage
                    shortMessage="field error"
                    message={fbError.message}
                  />
                )}
                <button
                  type="submit"
                  className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                >
                  {loading ? <MiniLoadingSpinner /> : "Sign In"}
                </button>
              </form>

              <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  By proceeding, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms of Use
                  </a>{" "}
                  and confirm you have read our{" "}
                  <a href="#" className="underline">
                    Privacy and Cookie Statement
                  </a>
                  .
                </p>
                <p className="text-xs">
                  This site is protected by reCAPTCHA and the{" "}
                  <a href="#" className="underline">
                    Google Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
