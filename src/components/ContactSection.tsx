import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CONTACT_INFO } from '@/lib/constants';
import { staggerContainer, fadeIn } from '@/lib/animations';
export function ContactSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="py-16"
    >
      <div className="container mx-auto">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center mb-12 neon-text">
          Как нас найти
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="gamer-card">
            <h3 className="text-xl font-bold mb-4 text-gamer-secondary">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-gamer-accent mr-2">Телефон:</span>
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center">
                <span className="text-gamer-accent mr-2">Email:</span>
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center">
                <span className="text-gamer-accent mr-2">Режим работы:</span>
                {CONTACT_INFO.workingHours}
              </li>
            </ul>
          </Card>
          <Card className="gamer-card">
            <h3 className="text-xl font-bold mb-4 text-gamer-secondary">Адрес</h3>
            <p>{CONTACT_INFO.address}</p>
            <div className="mt-4 h-48 bg-gamer-background border-2 border-gamer-primary rounded-lg">
              Карта
            </div>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
