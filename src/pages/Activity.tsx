import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Activity = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Impact & Activity</h1>
            <p className="text-lg text-muted-foreground">
              Witness the transformation. See how we turn sacred waste into compost and restore the beauty of our rivers and lakes.
            </p>
          </div>

          {/* Before and After Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2 inline-block shadow-sm px-4 rounded-t-lg bg-card text-primary pt-2">Transformation (Before & After)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-2xl border shadow-sm">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full z-10 shadow-md">Before</div>
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" alt="Polluted river bank" className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4 bg-card">
                  <p className="font-medium">Yamuna Ghat covered in floral waste after major festival.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border shadow-sm">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full z-10 shadow-md">After</div>
                <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80" alt="Clean nature" className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4 bg-card">
                  <p className="font-medium">The same Ghat restored to its serene state after our cleanup drive.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compost Process Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2 inline-block shadow-sm px-4 rounded-t-lg bg-card text-primary pt-2">Composting & Healing Nature</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden border shadow-sm bg-card group">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80" alt="Collecting flowers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">1. Collection</h3>
                  <p className="text-sm text-muted-foreground">Gathering floral waste directly from households and local temples.</p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden border shadow-sm bg-card group">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80" alt="Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">2. Segregation</h3>
                  <p className="text-sm text-muted-foreground">Separating organic materials (flowers, leaves) from plastics and threads.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border shadow-sm bg-card group">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80" alt="Compost" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">3. Composting</h3>
                  <p className="text-sm text-muted-foreground">Transforming organic waste into nutrient-rich organic fertilizer over 45 days.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Support Gallery */}
          <div>
            <h2 className="text-2xl font-bold mb-8 border-b pb-2 inline-block shadow-sm px-4 rounded-t-lg bg-card text-primary pt-2">Community & Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80" alt="Community" className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow" />
              <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80" alt="Events" className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow" />
              <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80fbfc9?auto=format&fit=crop&q=80" alt="Planting" className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow" />
              <img src="https://images.unsplash.com/photo-1532629345422-7515fecd1b5a?auto=format&fit=crop&q=80" alt="Together" className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow" />
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Activity;
