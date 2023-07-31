"use client";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import SubmitBtn from "@components/buttons/auth/SubmitBtn";
import FieldErrorMessage from "@components/landing/forms/FieldErrorMessage";
import { useState } from "react";
import { auth } from "@config/firebase";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, fbError] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendPasswordResetEmail(email);

    setIsSuccess(true);
  };

  return (
    <div>
      <p>Reset your password</p>

      {isSuccess ? (
        <p>Check your email :)</p>
      ) : (
        <>
          <p>
            {`Enter the email associated with your account and we'll 
            send you a reset link.`}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {fbError && (
              <FieldErrorMessage shortMessage="" message={fbError.message} />
            )}

            <SubmitBtn btnText="Reset Password" isLoading={sending} />
          </form>
        </>
      )}
    </div>
  );
};
export default ResetPassword;
