
const deals = [
  {
    id: 1,
    title: "Echo Dot (4th Gen)",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=300&h=300&q=80",
    discount: 40
  },
  {
    id: 2,
    title: "Wireless Earbuds",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&h=300&q=80",
    discount: 38
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=300&h=300&q=80",
    discount: 20
  },
  {
    id: 4,
    title: "Laptop Stand",
    price: 24.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1616509091215-57bbeka8b7ea?auto=format&fit=crop&w=300&h=300&q=80",
    discount: 37
  }
];

export default function Deals() {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Today's Deals</h2>
          <a href="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
            See all deals
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded">
                  {deal.discount}% OFF
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">{deal.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold">${deal.price}</span>
                  <span className="text-sm text-gray-500 line-through">
                    ${deal.originalPrice}
                  </span>
                </div>
                <button className="mt-4 w-full bg-[#febd69] text-gray-900 py-2 rounded hover:bg-[#f3a847] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}