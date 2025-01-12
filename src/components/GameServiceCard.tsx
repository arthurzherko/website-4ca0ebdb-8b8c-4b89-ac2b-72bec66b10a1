import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/animations';
import { SERVICES } from '@/lib/constants';
interface GameServiceCardProps {
  service: (typeof SERVICES)[number];
  onBooking: (serviceId: string) => void;
}
export function GameServiceCard({ service, onBooking }: GameServiceCardProps) {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      <Card className="gamer-card overflow-hidden">
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold neon-text">{service.name}</h3>
          <p className="text-sm">{service.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gamer-accent">{service.price} ₽/час</span>
            <Button onClick={() => onBooking(service.id)} className="gamer-button">
              Забронировать
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
