import { Laptop, Headphones, Camera, Watch, Shirt, Home, Gift, Book } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Laptop },
  { name: 'Audio', icon: Headphones },
  { name: 'Cameras', icon: Camera },
  { name: 'Watches', icon: Watch },
  { name: 'Fashion', icon: Shirt },
  { name: 'Home & Kitchen', icon: Home },
  { name: 'Gifts', icon: Gift },
  { name: 'Books', icon: Book },
];

export default function Categories() {
  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center"
            >
              <Icon size={32} className="text-[#232f3e] mb-4" />
              <span className="font-medium text-gray-800">{category.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}