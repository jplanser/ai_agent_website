'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Define pain points & business needs',
    color: 'from-blue-600 to-blue-400'
  },
  {
    step: 2,
    title: 'Discovery Workshop',
    description: 'Identify automation opportunities',
    color: 'from-indigo-600 to-indigo-400'
  },
  {
    step: 3,
    title: 'AI Development',
    description: 'Custom AI agent built rapidly',
    color: 'from-violet-600 to-violet-400'
  },
  {
    step: 4,
    title: 'Sandbox Testing',
    description: 'Ensure seamless integration',
    color: 'from-purple-600 to-purple-400'
  },
  {
    step: 5,
    title: 'Deployment & Monitoring',
    description: 'AI goes live with real-time tracking',
    color: 'from-fuchsia-600 to-fuchsia-400'
  },
  {
    step: 6,
    title: 'Optimization & Scaling',
    description: 'Continuous performance improvements',
    color: 'from-pink-600 to-pink-400'
  }
]

const HowItWorks = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20" />
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
            From Idea to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AI Implementation&nbsp; 
            </span>
            | Live in Just Days
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 gap-6 mb-16 relative max-w-4xl mx-auto">
          {/* Vertical connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 opacity-20 transform -translate-x-1/2" />
          
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative flex ${
                index % 2 === 0 ? 'justify-end md:pr-[50%] md:pl-4' : 'justify-start md:pl-[50%] md:pr-4'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-1/2 z-10" />
              
              {/* Card content */}
              <div className="relative flex items-center gap-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 w-full md:w-auto md:min-w-[320px]">
                {/* Glowing background effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300" />
                
                {/* Step number */}
                <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color}`}>
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                
                <div className="relative flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* CTA Button */}
           {/* CTA Button */}
           <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-right"
        >
          <Link href="/how-it-works" className="inline-block">
            <motion.button
              className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full overflow-hidden flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More About Our Process</span>
              <ArrowRightIcon className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default HowItWorks