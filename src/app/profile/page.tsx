'use client';

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import img from '@/assets/Image.jpeg';
import toast from "react-hot-toast";
import { type SubmitEvent } from "react";
const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;
const handleupdate = async (e: SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formdata = new FormData(e.currentTarget);
  const name = (formdata.get("name") as string)?.trim();

  if (!name) {
    toast.error("নাম খালি রাখা যাবে না");
    return;
  }

  const { error } = await updateUser({ name });

  if (error) {
    toast.error(error.message || "আপডেট ব্যর্থ হয়েছে");
    return;
  }
  toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
};
  return (
    <div className="min-h-screen bg-[#f0f5f0] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#25332a]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

       
        <div className="mb-5 flex flex-col gap-4 rounded-2xl border border-[#e0e9e1] bg-[#fafcfb] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

          <div className="flex items-center gap-4">
            <Image
              src={img}
              alt="User profile"
              height={60}
              width={60}
              className="h-14 w-14 rounded-2xl object-cover"
            />

            <div className="min-w-0">
              <h2 className="text-base font-semibold text-[#27352c]">
                {user?.name || "ব্যবহারকারী"}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-500">
                {user?.email || "ইমেইল পাওয়া যায়নি"}
              </p>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="self-start rounded-lg border border-red-400 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 sm:self-auto"
          >
            ↩ সাইন আউট
          </button>

        </div>

  
        <div className="rounded-2xl border border-[#e0e9e1] bg-[#fafcfb] p-5 sm:p-8">

          <h2 className="mb-7 text-base font-semibold text-[#27352c]">
            তথ্য
          </h2>

          <form onSubmit={handleupdate}className="space-y-3">

       
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#37443a]"
              >
                নাম
              </label>

              <input
                name="name"
                type="text"
                defaultValue={user?.name || ""}
                placeholder="আপনার নাম লিখুন"
                className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#078b45] py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#06783c] active:scale-[0.99]"
            >
              আপডেট
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;