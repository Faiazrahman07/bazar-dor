import Productlist from '@/components/Productlist';
import { notFound } from 'next/navigation';

interface Product {
  id: string;
  nameBn: string;
  categoryNameBn: string;
  today: number;
  image: string;
  change: {
    dir: string;
    pct: number;
  };
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`
  );
 
  const data: Product[] = await res.json();

  return (
    <div className="min-h-screen bg-[#f1f4f0]">
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
     
          <div className="mb-4 flex w-full items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-3xl leading-none">
              {data[0].image}
            </span>
            <div>
              <p className="text-2xl font-bold leading-tight text-gray-900">
                {data[0].categoryNameBn}
              </p>
              <h2 className="mt-0.5 text-xs leading-5 text-gray-500">
                {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </h2>
            </div>
          </div>

           <div className="mb-3">
            <Productlist data={data} />
          </div>

        
        </div>
      </section>
    </div>
  );
};

export default Page;