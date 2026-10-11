import React from "react";
import type { Product } from "@/types/product";


interface HomecardProps {
  Product: Product;
}

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const toBn = (n: number) => n.toLocaleString("bn-BD");

const Homecard = ({ Product }: HomecardProps) => {
  const unit = unitBn[Product.unit] ?? Product.unit;
  const isUp = Product.change.dir === "up";

  return (
    <div className="rounded-3xl border border-gray-200 bg-[#f9fbf8] p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-300">
          <span className="text-2xl leading-none">{Product.image}</span>
        </div>

        <div>
          <p className="text-xl font-bold text-gray-900">{Product.nameBn}</p>
          <p className="text-sm text-gray-600">প্রতি {unit}</p>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-sm text-gray-700">আজকের দাম</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {toBn(Product.today)}{" "}
            <span className="text-lg font-semibold">টাকা</span>
          </p>
        </div>

        <div
          className={`flex items-center gap-1.5 rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold ${
            isUp ? "text-red-600" : "text-green-600"
          }`}
        >
          <span className="text-xs">{isUp ? "▲" : "▼"}</span>
          <span>{toBn(Product.change.pct)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Homecard;