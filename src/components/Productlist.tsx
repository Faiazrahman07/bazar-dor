"use client";

import { useState } from "react";
import Homecard from "./Homecard";

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

interface ProductListProps {
data: Product[];
}

export default function Productlist({ data }: ProductListProps) {
const [value, setValue] = useState("default");

const sortedProduct = [...data].sort((a, b) => {
if (value === "low-to-high") {
return a.today - b.today;
}

if (value === "high-to-low") {
  return b.today - a.today;
}

return 0;


});

return ( <div className="w-full"> 
<div className="mb-4 flex  justify-end w-full items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
   <label className="text-gray-900">সাজান</label>

    <select
      id="sort"
      name="sort"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="rounded-xl border p-2 w-20 border-gray-300"
    >
      <option value="default">ডিফল্ট</option>
      <option value="low-to-high">দাম কম থেকে বেশি</option>
      <option value="high-to-low">দাম বেশি থেকে কম</option>
    </select>
  </div>
  <h2 className="text-s leading-6 text-gray-500">
            মোট {data.length}টি পণ্য দেখানো হচ্ছে
          </h2>
  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {sortedProduct.map((product) => (
      <Homecard key={product.id} Product={product} />
    ))}
  </div>
</div>

);
}
