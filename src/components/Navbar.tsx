
import Link from "next/link";

interface Category {

  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Navbar = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  const data: Category[] = await res.json();

  return (
   <div>
     
        <nav className="m-3 flex items-center gap-2 overflow-x-auto border-t border-gray-100 py-4[scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link href='/'>হোম</Link>
          {data.map((value) => (
            <Link
              key={value.id}
              href={`/category/${value.slug}`}
              className="shrink-0 rounded-xl px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              <span className="mr-1.5">{value.icon}</span>
              {value.nameBn}
            </Link>
          ))}
        </nav>

      </div>
  
  );
};

export default Navbar;
