"use client";
import MiniLoadingSpinner from "@components/icons/MiniLoadingSpinner";
import { auth } from "@config/firebase";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

type Props = {
  icon?: boolean;
};

const SignInWithGoogleBtn: React.FC<Props> = ({ icon }) => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);

  if (icon) {
    return (
      <button
        onClick={() => signInWithGoogle()}
        className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-gray"
      >
        {loading ? <MiniLoadingSpinner /> : "G+"}
      </button>
    );
  }

  return (
    <button
      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
      onClick={() => signInWithGoogle()}
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <img
          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
          className="absolute left-0 w-5"
          alt="google logo"
        />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
          {loading ? <MiniLoadingSpinner /> : " Continue with Google"}
        </span>
      </div>
    </button>
  );
};
// {fbError && <Text>{fbError.message}</Text>} use toast
SignInWithGoogleBtn.defaultProps = { icon: false };

export default SignInWithGoogleBtn;
