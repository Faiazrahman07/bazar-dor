'use client'
import Image from 'next/image';
import logo from '@/assets/logo-icon.png';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Userinfo from './Userinfo';
const Header = () => {
   const [date, setDate] = useState("");

useEffect(() => {
const today = new Date().toLocaleDateString("bn-BD", {
dateStyle: "full",
});

setDate(today);

}, []);
  return (
   <div className=" flex items-center justify-between mt-4">
  
  <div className=" flex items-center gap-2 ml-3.5">
   <div className='bg-green-700 p-3 rounded-2xl'>
     <Image  height={36} src={logo} alt="" />
   </div>

    <div>
      <p className='text-2xl text-red-700 font-bold'>বাজার দর</p>
      <p className='text-xs'>{date}</p>
    </div>
  </div>
      <Userinfo></Userinfo>
     
</div>
  );
};

export default Header;