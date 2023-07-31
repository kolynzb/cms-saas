"use client";
import SignInWithGoogleBtn from "@components/buttons/auth/SignInWithGoogleBtn";
import { EmailIcon, PasswordIcon } from "@components/icons";
import MiniLoadingSpinner from "@components/icons/MiniLoadingSpinner";
import FieldErrorMessage from "@components/landing/forms/FieldErrorMessage";
import { auth } from "@config/firebase";
import Link from "next/link";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

type Props = {};

const Register = (props: Props) => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, fbError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset the error before trying to submit the form
    if (error) setError("");

    // Check passwords match
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check password format
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,256}$/gm;

    if (!passwordRegex.test(signUpForm.password)) {
      setError(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">CRM</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome</p>
          <div className="py-6 space-x-2">
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-gray">
              f
            </span>
            <SignInWithGoogleBtn icon={true} />
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-gray">
              in
            </span>
          </div>
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
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <PasswordIcon />
            <input
              className="pl-2 outline-none border-none"
              name="confirmPassword"
              id=""
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          {(error || fbError) && (
            <FieldErrorMessage
              shortMessage="field error"
              message={error || fbError?.message}
            />
          )}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            {loading ? <MiniLoadingSpinner /> : "Sign Up"}
          </button>
          <Link href="/auth/sign-in">
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Already Have Account ?
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
