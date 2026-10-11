import Link from "next/link";

const NotFound = () => {
return ( 
<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
   <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12"> 
  <h1 className="mb-4 text-8xl font-extrabold text-blue-600">
404 </h1>

    <h2 className="mb-3 text-2xl font-bold text-gray-800">
      Page Not Found!
    </h2>

    <p className="mb-8 leading-7 text-gray-500">
      দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
      URL টি সঠিক আছে কি না, অনুগ্রহ করে যাচাই করুন।
    </p>

    <Link
      href="/"
      className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      ← হোম পেজে ফিরে যান
    </Link>
  </div>
</div>

);
};

export default NotFound;
