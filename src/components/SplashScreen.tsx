import { useEffect } from 'react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500); // Show logo for 3.5 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-[#727355] flex flex-col items-center justify-center p-8"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-64 h-64 relative flex items-center justify-center"
      >
        <img 
          src="./logo.gif" 
          alt="Brewesta Logo" 
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = './logo.png';
          }}
        />
      </motion.div>
    </motion.div>
  );
}
