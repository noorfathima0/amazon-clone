import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Deals from './components/Deals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-[1500px] mx-auto">
        <Hero />
        <Categories />
        <Deals />
      </main>
      <Footer />
    </div>
  );
}

export default App;