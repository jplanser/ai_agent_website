import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FiDatabase, 
  FiUsers, 
  FiGlobe,
  FiPieChart,
  FiBell,
  FiTrendingUp 
} from 'react-icons/fi';
import { RiRobot2Fill } from 'react-icons/ri';

const HeroVisualization = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 4800); // Total animation cycle duration

    return () => clearInterval(animationInterval);
  }, []);

  const iconSize = 40;
  const robotSize = 64;

  const inputSources = [
    { Icon: FiDatabase, label: 'Database', initialX: -200, initialY: -100 },
    { Icon: FiUsers, label: 'CRM', initialX: -200, initialY: 0 },
    { Icon: FiGlobe, label: 'Web', initialX: -200, initialY: 100 },
  ];

  const outputs = [
    { Icon: FiPieChart, label: 'Reports', initialX: 200, initialY: -100 },
    { Icon: FiBell, label: 'Alerts', initialX: 200, initialY: 0 },
    { Icon: FiTrendingUp, label: 'Revenue Growth', initialX: 200, initialY: 100 },
  ];

  return (
    <div className="relative h-[400px] w-full flex items-center justify-center">
      {/* AI Robot in the center */}
      <motion.div
        key={`robot-${animationKey}`}
        className="absolute z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <RiRobot2Fill size={robotSize} className="text-blue-500" />
      </motion.div>

       {/* Input sources */}
       {inputSources.map(({ Icon, label, initialX, initialY }, index) => (
        <motion.div
          key={`input-${label}-${animationKey}`}
          className="absolute flex items-center gap-2"
          initial={{ x: initialX, y: initialY, opacity: 1 }}
          animate={{ 
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0
          }}
          transition={{ 
            duration: 1.5,
            delay: 1 + index * 0.3, // Added 1 second initial delay
          }}
        >
          <Icon size={iconSize} className="text-gray-600" />
          <span className="text-sm font-medium">{label}</span>
        </motion.div>
      ))}

      {/* Output elements */}
      {outputs.map(({ Icon, label, initialX, initialY }, index) => (
        <motion.div
          key={`output-${label}-${animationKey}`}
          className="absolute flex items-center gap-2"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ 
            x: initialX,
            y: initialY,
            opacity: 1,
            scale: 1
          }}
          transition={{ 
            duration: 1,
            delay: 2.5 + index * 0.3, // Adjusted to maintain timing relative to inputs
          }}
        >
          <Icon size={iconSize} className="text-green-500" />
          <span className="text-sm font-medium">{label}</span>
        </motion.div>
      ))}

    </div>
  );
};

export default HeroVisualization;