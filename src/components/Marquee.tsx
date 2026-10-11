import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Product {
  id: string;
  nameBn: string;
  unit: string;
  today: number;
  image: string;
  change: {
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await res.json();

  return (
    <section className="border border-white bg-white shadow-sm">
      <div className="flex items-stretch">
        <div className="flex min-w-0 flex-1 items-center overflow-hidden bg-white">
          <MarqueeText direction="left" duration={8}>
            <div className="flex items-center whitespace-nowrap">
              {data.map((value) => (
                <div
                  key={value.id}
                  className="flex items-center gap-2 border-r border-emerald-100 px-5 py-1.5 text-sm"
                >
                  <span className="text-lg">{value.image}</span>

                  <span className="font-semibold text-gray-700">
                    {value.nameBn}
                  </span>

                  <span className="font-bold text-gray-900">
                    ৳{value.today.toLocaleString("bn-BD")}
                  </span>

                  <span className="text-xs text-gray-500">
                    / {value.unit}
                  </span>

                  <span
                    className={`flex items-center gap-0.5 font-bold ${
                      value.change.pct > 0
                        ? "text-red-600"
                        : value.change.pct < 0
                        ? "text-emerald-700"
                        : "text-gray-500"
                    }`}
                  >
                    {value.change.pct > 0
                      ? "▲"
                      : value.change.pct < 0
                      ? "▼"
                      : "–"}

                    {Math.abs(value.change.pct).toLocaleString("bn-BD")}%
                  </span>
                </div>
              ))}
            </div>
          </MarqueeText>
        </div>
      </div>
    </section>
  );
};

export default Marquee;