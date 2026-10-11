'use client';

import Image from 'next/image';
import logo from '@/assets/logo-icon.png';
import Userinfo from './Userinfo';

const Header = () => {
 const date = new Date().toLocaleDateString('bn-BD',{
    dateStyle :'full'
  })
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="ml-3.5 flex items-center gap-2">
        <div className="rounded-2xl bg-green-700 p-3">
          <Image
            height={36}
            src={logo}
            alt="বাজার দর লোগো"
          />
        </div>

        <div>
          <p className="text-2xl font-bold text-red-700">
            বাজার দর
          </p>
          <p className="text-xs">{date}</p>
        </div>
      </div>

      <Userinfo />
    </div>
  );
};

export default Header;