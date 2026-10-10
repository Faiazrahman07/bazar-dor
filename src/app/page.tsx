import Hero from "@/components/Hero";
import Homecard from "@/components/Homecard";
import Link from "next/link";

interface Product {
  id: string;
  nameBn: string;
  today: number;
  image: string;
  change: {
    dir: string;
    pct: number;
  };
}

export default async function Home() {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const data: Product[] = await res.json();

  const filteredProducts = data
    .filter((value) => value.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

    const decreasedProducts = data
  .filter((value) => value.change.dir === "down")
  .sort((a, b) => a.change.pct - b.change.pct)
  .slice(0, 6);

  return (
    <div>
      <Hero />

      <section className="bg-[#eef3ee] px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
      
          <div className="mb-5 flex items-center gap-2">
            <span className="text-sm text-red-600">▲</span>
            <h2 className="text-2xl font-bold text-gray-900">আজ দাম বেড়েছে</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((val) => (
             <Link href={`/Product/${val.id}`}key={val.id}>
               <Homecard Product={val}></Homecard>
             </Link>
            ))}
          </div>
        </div>
      </section>
     <section className="bg-[#eef3ee] px-4 py-8 sm:px-6">
  <div className="mx-auto max-w-6xl">

    <div className="mb-5 flex items-center gap-2">
      <span className="text-sm text-green-600">▼</span>

      <h2 className="text-2xl font-bold text-gray-900">
        আজ দাম কমেছে
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {decreasedProducts.map((val) => (
        <Link href={`/Product/${val.id}`}key={val.id}>
               <Homecard Product={val}></Homecard>
             </Link>
      ))}
    </div>

  </div>
</section>
<section id="সব-পণ্য" className="bg-[#eef3ee] px-4 py-8 sm:px-6">
  <div className="mx-auto max-w-6xl">

    <div className="mb-5 ">
      <h2 className="text-2xl font-bold text-gray-900">
          সব পণ্য
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((val) => (
        <Link href={`/Product/${val.id}`}key={val.id}>
               <Homecard Product={val}></Homecard>
             </Link>
      ))}
    </div>

  </div>
</section>
  
    </div>

  );
}