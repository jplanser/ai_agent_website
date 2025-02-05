'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { RocketLaunchIcon, PuzzlePieceIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const VALUE_PROPS = [
  {
    Icon: RocketLaunchIcon,
    title: 'Rapid Deployment',
    solves: 'AI solutions built & deployed in days, not months.',
    benefit: 'Immediate impact with no lengthy development cycles.'
  },
  {
    Icon: PuzzlePieceIcon,
    title: 'Seamless Integration',
    solves: 'Works with existing systems (CRM, databases, APIs).',
    benefit: 'Zero-latency implementation & no workflow disruption.'
  },
  {
    Icon: CogIcon,
    title: 'Bespoke AI Solutions',
    solves: 'AI built for your unique processes and needs.',
    benefit: 'Custom automation that fits your exact business operations.'
  },
  {
    Icon: ChartBarIcon,
    title: 'Scalable & Future-Proof',
    solves: 'AI grows with your business as needs evolve.',
    benefit: 'Long-term automation and operational efficiency.'
  }
]

const WhyAIAgent = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-blue-900/10" />
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
            Eliminate Delays, Automate Workflows, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Scale Instantly
            </span>{' '}
            with AI Agents
          </h2>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {VALUE_PROPS.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-6">
                <prop.Icon className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                {prop.title}
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/20">
                  <p className="text-blue-100">{prop.solves}</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/20">
                  <p className="text-purple-100">→ {prop.benefit}</p>
                </div>
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
          <Link href="/how-it-works">
            <motion.button
              className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">See How It Works</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyAIAgent