import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import { GameServiceCard } from './GameServiceCard';
import { staggerContainer } from '@/lib/animations';
export function PricingSection() {
  const handleBooking = (serviceId: string) => {
    console.log('Booking service:', serviceId);
  };
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="py-16 bg-gamer-background"
    >
      <div className="container mx-auto">
        <motion.h2 className="text-3xl font-bold text-center mb-12 neon-text">
          Наши услуги
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <GameServiceCard key={service.id} service={service} onBooking={handleBooking} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
