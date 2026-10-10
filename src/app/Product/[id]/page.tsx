import React from "react";

interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface Product {
  id: number;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  image: string;
  unit: string;
  today: number;
  yesterday: number;
  change: { dir: string; pct: number };
  markets: Market[];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

const toBn = (n: number) =>
  n.toLocaleString("bn-BD", { maximumFractionDigits: 2 });

const toBnPrice = (n: number) =>
  n.toLocaleString("bn-BD", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`
  );
  const data: Product = await res.json();

  const unit = unitBn[data.unit] ?? data.unit;
  const isUp = data.today > data.yesterday;
  const diff = Math.abs(data.today - data.yesterday);

  const rows = data.markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const lowest = Math.min(...data.markets.map((m) => m.min));
  const highest = Math.max(...data.markets.map((m) => m.max));

  return (
    <div className="min-h-screen bg-[#f1f5f1] p-3 sm:p-4">
      <div className="mx-auto max-w-5xl space-y-4">
   
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-3xl leading-none">
              {data.image}
            </span>
            <div>
              <h1 className="text-2xl font-extrabold leading-tight text-gray-900">
                {data.nameBn}
              </h1>
              <p className="mt-0.5 text-xs text-gray-500">
                প্রতি {unit} · {data.categoryNameBn}
              </p>
              <p className="mt-1 text-xs text-gray-700">
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-bold">
                  {isUp ? "বেড়েছে" : "কমেছে"}
                </span>{" "}
                · {toBn(diff)} টাকা
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-2xl bg-gray-100 px-6 py-3 text-center">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-3xl font-extrabold leading-tight text-gray-900">
              {toBn(data.today)}
            </p>
            <p className="text-xs text-gray-500">টাকা / {unit}</p>
            <p
              className={`mt-0.5 text-xs font-semibold ${
                isUp ? "text-red-500" : "text-green-600"
              }`}
            >
              {isUp ? "▲" : "▼"} {toBn(data.change.pct)}%
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm">
          <h2 className="mb-3 text-base font-bold text-gray-900">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 px-4 py-3">
              <p className="text-[11px] text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-2xl font-extrabold text-green-600">
                {toBn(lowest)}{" "}
                <span className="text-sm font-semibold">টাকা</span>
              </p>
              <p className="mt-0.5 text-[11px] text-gray-500">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 px-4 py-3">
              <p className="text-[11px] text-gray-500">সর্বাধিক দাম</p>
              <p className="mt-1 text-2xl font-extrabold text-red-500">
                {toBn(highest)}{" "}
                <span className="text-sm font-semibold">টাকা</span>
              </p>
              <p className="mt-0.5 text-[11px] text-gray-500">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 px-4 py-3">
              <p className="text-[11px] text-gray-500">গড় দাম</p>
              <p className="mt-1 text-2xl font-extrabold text-green-600">
                {toBn(data.today)}{" "}
                <span className="text-sm font-semibold">টাকা</span>
              </p>
              <p className="mt-0.5 text-[11px] text-gray-500">
                প্রতি {unit} এর হিসাব
              </p>
            </div>
          </div>

          <h2 className="mb-3 mt-6 text-base font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs font-medium text-gray-500">
                  <th className="px-4 py-3 text-left font-medium">বাজার</th>
                  <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                  <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                  <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>
                  <th className="px-4 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((m) => (
                  <tr
                    key={m.market}
                    className="border-b border-gray-300 last:border-b-0 odd:bg-white even:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-gray-900">{m.market}</td>
                    <td className="px-4 py-3 text-gray-600">{m.division}</td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {toBn(m.min)} টাকা
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {toBn(m.max)} টাকা
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">
                      {toBnPrice(m.avg)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;