import { NavigationBar } from '@/components/NavigationBar';
import { HeroSection } from '@/components/HeroSection';
import { PricingSection } from '@/components/PricingSection';
import { BookingForm } from '@/components/BookingForm';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
const Home = () => {
  return (
    <div className="min-h-screen bg-gamer-background">
      <NavigationBar />
      <main>
        <HeroSection />
        <div id="services">
          <PricingSection />
        </div>
        <div id="booking" className="py-16 container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Забронировать</h2>
          <div className="max-w-md mx-auto">
            <BookingForm />
          </div>
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
