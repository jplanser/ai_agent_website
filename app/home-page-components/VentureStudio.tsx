'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  LightBulbIcon, 
  CommandLineIcon, 
  RocketLaunchIcon, 
  ChartBarSquareIcon 
} from '@heroicons/react/24/outline'

const VENTURE_STEPS = [
  {
    step: 1,
    icon: LightBulbIcon,
    title: 'Ideation & Validation',
    description: 'Define AI problem-solution fit.',
    color: 'from-emerald-600 to-emerald-400'
  },
  {
    step: 2,
    icon: CommandLineIcon,
    title: 'AI Development',
    description: 'We build & test the AI solution.',
    color: 'from-teal-600 to-teal-400'
  },
  {
    step: 3,
    icon: RocketLaunchIcon,
    title: 'GTM Strategy Execution',
    description: 'We launch & acquire clients.',
    color: 'from-cyan-600 to-cyan-400'
  },
  {
    step: 4,
    icon: ChartBarSquareIcon,
    title: 'Scale & Profit',
    description: 'Shared revenue growth model.',
    color: 'from-sky-600 to-sky-400'
  }
]

const VentureStudio = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20" />
      </div>

      <div className="container relative mx-auto px-8 lg:px-16 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Have a Game-Changing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              AI Idea
            </span>
            ?{' '}
            Let&apos;s Build It Together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We partner with industry experts to turn AI ideas into scalable businesses. 
            You bring the expertise, we handle development, funding & GTM execution.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {VENTURE_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Glowing background effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300" />
              
              {/* Card content */}
              <div className="relative flex flex-col items-center p-8 rounded-2xl bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 hover:border-emerald-500/50 transition-all duration-300">
                {/* Step number with icon */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} mb-6`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link href="/venture-studio">
            <motion.button
              className="relative group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Apply to Co-Found an AI Business</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default VentureStudio