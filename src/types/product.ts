export interface Product {
  id: string;
  nameBn: string;
  categoryNameBn: string;
  today: number;
  image: string;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}
