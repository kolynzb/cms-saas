"use client";
import SignInWithGoogleBtn from "@components/buttons/auth/SignInWithGoogleBtn";
import { EmailIcon, PasswordIcon } from "@components/icons";
import MiniLoadingSpinner from "@components/icons/MiniLoadingSpinner";
import FieldErrorMessage from "@components/landing/forms/FieldErrorMessage";
import { auth } from "@config/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState, useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { redirect, useRouter } from 'next/navigation'

type Props = {};

interface IFormInput {
  email: string;
  password: string;
  passwordConfirm: string;
}

const signUpSchema =  yup.object({
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Password confirmation is required'),
});


const Register = (props: Props) => {
  const [user] = useAuthState(auth);
  if (user){
    redirect('/dashboard')
  }

  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(signUpSchema)
  });

  
  const [createUserWithEmailAndPassword, loading, fbError] =
    useCreateUserWithEmailAndPassword(auth);
     
   const onSubmit = async (data: IFormInput) => {

   await createUserWithEmailAndPassword(data.email, data.password).then(()=>{ toast.success('Registered successfully!') 
  //  user?.sendEmailVerification()
   router.push("/auth/sign-in")
  }).catch(()=>toast.error("Error registering"));
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
        <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
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
            
       
              placeholder="Email Address"
              {...register("email")}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <PasswordIcon />
            <input
              className="pl-2 outline-none border-none"
         
              type="password"
          
              placeholder="Password"
              {...register("password")}
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <PasswordIcon />
            <input
              className="pl-2 outline-none border-none"

              id=""
              type="password"
              placeholder="Confirm Password"
              {...register("passwordConfirm")}
            />
          </div>
          {errors.passwordConfirm && <p className="text-red-500 text-xs">{errors.passwordConfirm.message}</p>}
          {( fbError) && (
            <FieldErrorMessage
              shortMessage="field error"
              message={(fbError as any)?.message}
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
