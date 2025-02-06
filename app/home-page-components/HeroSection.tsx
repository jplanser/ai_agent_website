'use client'
import HeroVisualization from '@/app/home-page-components/HeroVisualization'  
import { motion } from 'framer-motion'


// Predefined animation values
const GRID_ANIMATIONS = Array.from({ length: 64 }, (_, i) => ({
  duration: 2 + (i % 3),  // Will cycle between 2, 3, and 4 seconds
  delay: (i % 4) * 0.5    // Will cycle between 0, 0.5, 1, and 1.5 seconds delay
}))

// Create a more varied but deterministic pattern for particles
const PARTICLE_POSITIONS = Array.from({ length: 20 }, (_, i) => {
  const row = Math.floor(i / 4)  // 5 rows
  const col = i % 4      // 4 columns
  const jitter = ((i * 13) % 20) - 10  // Deterministic "random" offset between -10 and 10
  
  return {
    x: ((col * 100) + jitter - 150),     // Increased movement range
    y: ((row * 80) + jitter - 150),      // Increased movement range
    duration: 4 + (i % 3),               // Between 4-6 seconds
    left: `${(col * 25) + ((i * 7) % 15)}%`,  // Spread horizontally with variation
    top: `${(row * 20) + ((i * 11) % 10)}%`   // Spread vertically with variation
  }
})

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 animate-gradient-x" />
        
        {/* Animated grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full grid grid-cols-8 gap-1">
            {GRID_ANIMATIONS.map((anim, i) => (
              <div
                key={i}
                className="bg-blue-500/10 backdrop-blur-sm rounded-lg"
                style={{
                  animation: `pulse ${anim.duration}s infinite ${anim.delay}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {PARTICLE_POSITIONS.map((anim, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/50 rounded-full"
              animate={{
                x: [0, anim.x, -anim.x, 0],    // More complex movement pattern
                y: [0, anim.y, -anim.y, 0],    // More complex movement pattern
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: anim.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: anim.left,
                top: anim.top,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto px-8 lg:px-16 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left side - Content */}
        <motion.div 
          className="w-full lg:w-1/2 lg:pr-12 lg:pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Deploy Custom Built{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AI-Agents
            </span>{' '}
            in Days, Not Months
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            We rapidly build and deploy custom AI solutions that eliminate inefficiencies, 
            streamline operations, and seamlessly integrate into your business—exceptionally fast.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full overflow-hidden"
            >
              <span className="relative z-10">Get a Free AI Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div 
            className="mt-12 mb-16 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {/* Trusted By Section */}
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-gray-300 font-semibold mb-4">Trusted by Industry Leaders</h3>
                <div className="flex gap-4 items-center">
                  <div className="h-8 w-24 bg-gray-800/50 rounded backdrop-blur-sm"></div>
                  <div className="h-8 w-24 bg-gray-800/50 rounded backdrop-blur-sm"></div>
                  <div className="h-8 w-24 bg-gray-800/50 rounded backdrop-blur-sm"></div>
                </div>
              </div>

              {/* Featured In Section */}
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-gray-300 font-semibold mb-4">Featured In</h3>
                <div className="flex gap-4 items-center">
                  <div className="h-8 w-24 bg-gray-800/50 rounded backdrop-blur-sm"></div>
                  <div className="h-8 w-24 bg-gray-800/50 rounded backdrop-blur-sm"></div>
                  <div className="h-8 w-24 bg-gray-800/50 rounded backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-blue-400 font-semibold">
                80% of insurers are investing in AI for claims automation
              </p>
            </div>
          </motion.div>
        </motion.div>


        {/* Right side - Visual */}
        <motion.div 
          className="hidden lg:block w-full lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-[600px] mx-auto aspect-[4/3] rounded-lg flex items-center justify-center">
            <HeroVisualization />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection