import ProductCard from "../components/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "MacBook Pro M3",
    price: 1999,
    discount: 10,
    image: "/macbook.jpg",
    category: "MacBook",
  },
  {
    id: 2,
    name: "iMac 24-inch",
    price: 1499,
    discount: 5,
    image: "/imac.jpg",
    category: "iMac",
  },
  {
    id: 3,
    name: "Mac Mini M2",
    price: 699,
    discount: 0,
    image: "/macmini.jpg",
    category: "Mac Mini",
  },
];

export default function HomePage() {
  const categories = ["MacBook", "iMac", "Mac Mini"];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full border hover:bg-black hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
