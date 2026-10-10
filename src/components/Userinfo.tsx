'use client';

import { useSession, signOut } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import img from '@/assets/Image.jpeg';

const Userinfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
const handledropdown =()=>{
  setOpen(!open);
}
const handlesignout =async ()=>{
   await signOut();
     setOpen(false);
}
  return (
    <div className="relative">
      {user ? (
        <div>
      
          <button
            onClick={handledropdown}
            className="flex items-center gap-3"
          >
            <Image
              src={img}
              alt="User profile"
              height={40}
              width={40}
              className="rounded-xl object-cover"
            />

            <p className="text-xs font-medium">{user.name}</p>

            <span className="text-gray-500 text-xs">▼</span>
          </button>

          {open && (
            <div className="absolute right-0 top-16 z-50 w-80 rounded-3xl border border-gray-200 bg-white p-6 text-gray-800 shadow-xl">

          
              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  {user.name}
                </h3>

                <p className="mt-1 break-all text-sm text-gray-500">
                  {user.email}
                </p>
              </div>

              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="mb-5 flex items-center gap-3 text-lg hover:text-blue-600"
              >
                <span>👤</span>
                <span>আমার প্রোফাইল</span>
              </Link>

        
              <button
                onClick={handlesignout}
                className="flex items-center gap-3 text-lg text-red-500 hover:text-red-700"
              >
                <span>↩</span>
                <span>সাইন আউট</span>
              </button>

            </div>
          )}
        </div>
      ) : (
        <div className="ml-auto flex gap-2">
          <Link href="/signin">
            <button className="btn rounded-xl">
              সাইন ইন
            </button>
          </Link>

          <Link href="/signup">
            <button className="btn rounded-xl bg-red-700 px-2 text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;