import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
export function NavigationBar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gamer-background/80 backdrop-blur-sm border-b border-gamer-primary"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold neon-text"
          >
            Game Room
          </motion.div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#services" className="hover:text-gamer-primary transition-colors">
                Услуги
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-gamer-primary transition-colors">
                Бронирование
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gamer-primary transition-colors">
                Контакты
              </a>
            </li>
          </ul>
          <Button className="gamer-button">Забронировать</Button>
        </div>
      </div>
    </motion.nav>
  );
}
