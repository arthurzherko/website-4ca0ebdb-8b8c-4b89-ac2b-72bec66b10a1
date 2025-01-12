import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Canvas className="absolute inset-0">
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
      <div className="relative z-10 text-center space-y-8">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold neon-text"
        >
          Game Room
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Погрузись в мир игр на самом современном оборудовании
        </motion.p>
      </div>
    </motion.div>
  );
}
