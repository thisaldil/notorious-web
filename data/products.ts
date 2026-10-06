export type Category = "Tees" | "Hoodies" | "Outerwear" | "Bottoms";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  images: string[]; // first = main image, second (optional) = hover image
  sizes: string[];
  color: string;
  material: string;
  care: string;
  tone: number; // placeholder brightness, only used if an image fails to load
}

const care = "Machine wash cold, inside out. Hang dry. Do not bleach.";
const img = (file: string) => `/images/products/${file}`;

export const categories: ("All" | Category)[] = ["All", "Tees", "Hoodies", "Outerwear", "Bottoms"];

export const products: Product[] = [
  {
    slug: "black-essential-tee", name: "Black Essential Tee", category: "Tees", price: 48,
    description: "A boxy, heavyweight tee cut for a clean drop at the shoulder. The one you reach for every day.",
    images: [img("black-essential-tee.jpg"), img("charcoal-essential-tee.jpg")],
    sizes: ["S", "M", "L", "XL"], color: "Black", material: "100% combed cotton, 240gsm", care, tone: 8,
  },
  {
    slug: "charcoal-essential-tee", name: "Charcoal Essential Tee", category: "Tees", price: 48,
    description: "The Essential Tee in washed charcoal. Same weight, same fit, softer tone.",
    images: [img("charcoal-essential-tee.jpg"), img("black-essential-tee.jpg")],
    sizes: ["S", "M", "L", "XL"], color: "Charcoal", material: "100% combed cotton, 240gsm", care, tone: 25,
  },
  {
    slug: "white-essential-tee", name: "White Essential Tee", category: "Tees", price: 48,
    description: "A clean white tee with a dense hand-feel and a ribbed collar that holds its shape.",
    images: [img("white-essential-tee.jpg")],
    sizes: ["S", "M", "L", "XL"], color: "White", material: "100% combed cotton, 240gsm", care, tone: 88,
  },
  {
    slug: "black-oversized-hoodie", name: "Black Oversized Hoodie", category: "Hoodies", price: 98,
    description: "Wide body, dropped shoulder, heavy brushed fleece inside.",
    images: [img("black-oversized-hoodie.jpg"), img("white-oversized-hoodie.jpg")],
    sizes: ["S", "M", "L", "XL"], color: "Black", material: "Cotton fleece, 420gsm", care, tone: 6,
  },
  {
    slug: "white-oversized-hoodie", name: "White Oversized Hoodie", category: "Hoodies", price: 98,
    description: "The oversized hoodie in off-white. Heavy, structured, easy to layer.",
    images: [img("white-oversized-hoodie.jpg"), img("black-oversized-hoodie.jpg")],
    sizes: ["S", "M", "L", "XL"], color: "White", material: "Cotton fleece, 420gsm", care, tone: 85,
  },
  {
    slug: "black-bomber-jacket", name: "Black Bomber Jacket", category: "Outerwear", price: 148,
    description: "Lightweight bomber with ribbed trims and matte hardware. Built to layer.",
    images: [img("black-bomber-jacket.jpg")],
    sizes: ["S", "M", "L", "XL"], color: "Black", material: "Nylon shell, cotton lining", care, tone: 5,
  },
  {
    slug: "dark-denim-jacket", name: "Dark Denim Jacket", category: "Outerwear", price: 138,
    description: "Rigid dark denim with a clean, boxy cut and minimal branding.",
    images: [img("dark-denim-jacket.jpg")],
    sizes: ["S", "M", "L", "XL"], color: "Dark indigo", material: "12oz cotton denim", care, tone: 14,
  },
  {
    slug: "black-cargo-pants", name: "Black Cargo Pants", category: "Bottoms", price: 108,
    description: "Relaxed cargo with a tapered ankle and deep utility pockets.",
    images: [img("black-cargo-pants.jpg")],
    sizes: ["28", "30", "32", "34", "36"], color: "Black", material: "Cotton twill", care, tone: 10,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);