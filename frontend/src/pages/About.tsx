import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Faith Meets Nature.</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We started with a simple belief: our devotion should nurture the environment, not pollute it.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
            
            <img src="https://images.unsplash.com/photo-1549487569-42b7852a36b2?auto=format&fit=crop&q=80" alt="Ganga River" className="w-full h-[400px] object-cover rounded-3xl shadow-md my-12" />

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Unseen Problem</h2>
              <p>
                In India, faith is a way of life. Millions of devotees offer beautiful, fragrant flowers to deities every single day. But what happens to the flowers once the prayers are over?
              </p>
              <p>
                For generations, it has been a sacred tradition to immerse pooja offerings into our holy rivers like the Ganges and Yamuna. However, the modern reality is harsh. The flowers, often sprayed with chemical pesticides, rot in the water. Toxic dyes from incidental waste seep into the aquatic ecosystems. Instead of carrying our devotion to the heavens, we are inadvertently choking the very rivers we worship as Goddesses.
              </p>
            </div>

            <div className="pl-6 border-l-4 border-primary my-10 py-2">
              <p className="text-2xl font-medium text-foreground italic leading-relaxed m-0">
                "Our rivers endure the weight of our devotion. It's time our devotion took care of our rivers."
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">A Community-Driven Mission</h2>
              <p>
                SwachhPooja was born out of a profound heartache witnessing polluted riverbanks after majestic festivals. A small group of friends—college students, local volunteers, and distressed devotees—decided that action was long overdue.
              </p>
              <p>
                We realized that if we could intercept these sacred offerings <em>before</em> they reached the water, we could honor the devotion behind them. We started going door-to-door, speaking to temples and households, providing a respectful alternative. What started in one neighborhood quickly grew into a massive community-driven movement. 
              </p>
              <p>
                Today, people don't just hand over their waste; they actively join us on weekends. Grandparents bring their grandchildren to our compost sites, teaching them that true faith involves tending to Mother Nature.
              </p>
            </div>

            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80" alt="Hands holding soil" className="w-full h-[400px] object-cover rounded-3xl shadow-md my-12" />

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Circle of Life</h2>
              <p>
                At SwachhPooja, we don't treat floral offerings as waste. We collect them with the exact dignity with which they were offered. 
              </p>
              <p>
                Through completely natural composting methods, these wilted flowers undergo a beautiful transformation. The same marigolds and roses that graced altars are returned to the earth as nutrient-rich, organic compost. We then distribute this "blessed" soil back to farmers, nurseries, and home gardeners. 
              </p>
              <p>
                From blooming in a field, to honoring the divine, to nurturing new life in the soil—we ensure the circle remains unbroken.
              </p>
            </div>

          </div>
          
          <div className="mt-20 pt-10 border-t text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We are a young startup built on passion, sweat, and community love. We invite you to be part of our story. Request a pickup, volunteer, or just spread the word.
            </p>
            <a href="/support" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
              Support Our Cause
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
