import { type Variants } from 'framer-motion';
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
export const glowEffect: Variants = {
  idle: { boxShadow: '0 0 10px rgba(0,0,255,0.3)' },
  hover: { boxShadow: '0 0 20px rgba(0,255,255,0.6)' },
};
