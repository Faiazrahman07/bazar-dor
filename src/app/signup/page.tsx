'use client'
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, signUp } from '../../lib/auth-client';
import toast from 'react-hot-toast';

const SignupPage = () => {
  

  const handlesignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries());

  if (user.password !== user.confirmpassword) {
    alert("পাসওয়ার্ড মিলছে না");
    return;
  }

    const { data, error } = await signUp.email({
      name: user.name as string,
  email: user.email as string,
  password: user.password as string,
      callbackURL: '/',
       
    });
 if (error) {
toast.error("Signup করতে সমস্যা হয়েছে!");
    return;
  }
   if(data){
    toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
   }
};
 const handlegooglesignin =async()=>{
    const data = await signIn.social({
    provider: "google",
  });
  }
   const handlegithub =async()=>{
   const data = await signIn.social({
          provider: "github"
      });
    }
  return (
    <div className="min-h-screen bg-[#F1F6F1] px-4 py-6 sm:py-8">

      <div className="m-2 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-2 text-[15px] text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="hero-content mx-auto flex-col">
        <div className="card w-full max-w-md shrink-0 rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] shadow-none">

          <div className="card-body p-5 sm:p-6">
           <form onSubmit={handlesignup}>
             <fieldset className="fieldset gap-2">

              <label className="font-medium text-gray-800">
                নাম
              </label>

              <input
                type="text" name='name'
                className="input h-10 w-full rounded-lg border border-[#DFE8DF] bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-green-600"
                placeholder="যেমন: রহিম উদ্দিন"
              />

              <label className="mt-2 font-medium text-gray-800">
                ইমেইল
              </label>

              <input
                type="email" name='email'
                className="input h-10 w-full rounded-lg border border-[#DFE8DF] bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-green-600"
                placeholder="you@example.com"
              />

              <label className="mt-2 font-medium text-gray-800">
                পাসওয়ার্ড
              </label>

              <input
                type="password" name='password'
                className="input h-10 w-full rounded-lg border border-[#DFE8DF] bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-green-600"
                placeholder="কমপক্ষে ৮ অক্ষর"
              />

              <label className="mt-2 font-medium text-gray-800">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                type="password" name='confirmpassword'
                className="input h-10 w-full rounded-lg border border-[#DFE8DF] bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-green-600"
                placeholder="আবার লিখুন"
              />

              <button type='submit' className="btn mt-4 h-10 min-h-10 w-full rounded-lg border-none bg-green-700 text-sm font-semibold text-white shadow-md hover:bg-green-800">
                অ্যাকাউন্ট তৈরি করুন
              </button>

            </fieldset>
           </form>

            <div className="my-1 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="text-sm text-gray-600">অথবা</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

              <button onClick={handlegooglesignin}className="btn h-10 min-h-10 rounded-lg border border-[#DFE8DF] bg-transparent text-xs font-semibold text-gray-800 shadow-none hover:bg-gray-100">
                  <FcGoogle className="text-lg" />
                 Google দিয়ে চালিয়ে যান
              </button>

              <button onClick={handlegithub } className="btn h-10 min-h-10 rounded-lg border border-[#DFE8DF] bg-transparent text-xs font-semibold text-gray-800 shadow-none hover:bg-gray-100">
                  <FaGithub className="text-lg" />
                 GitHub দিয়ে চালিয়ে যান
              </button>

            </div>

            <p className="mt-1 text-center text-sm text-gray-600">
              অ্যাকাউন্ট আছে?{' '}
              <Link
                href="/signin"
                className="font-medium text-green-700 hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>

          </div>
        </div>

        <Link
          href="/"
          className="mt-1 text-sm text-gray-500 hover:text-green-700"
        >
          ← হোম পেজে ফিরে যান
        </Link>

      </div>
    </div>
  );
};

export default SignupPage;