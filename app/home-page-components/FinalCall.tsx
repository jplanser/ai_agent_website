'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

const TRUSTED_BY = [
  { name: 'Company 1', logo: '/placeholder1.svg' },
  { name: 'Company 2', logo: '/placeholder2.svg' },
  { name: 'Company 3', logo: '/placeholder3.svg' },
]

const TESTIMONIAL = {
  quote: "The AI solution transformed our workflow efficiency beyond expectations.",
  author: "Sarah Chen",
  role: "CTO, TechCorp",
  company: "Global Solutions Inc."
}

const FinalCall = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20" />
      </div>

      <div className="container relative mx-auto px-8 lg:px-16 z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Automate & Scale?
            </span>{' '}
            Let&apos;s Talk AI.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Get a Free AI Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>

            <Link href="/case-studies" className="inline-block">
              <motion.button
                className="flex items-center gap-2 px-8 py-4 text-lg text-white bg-gray-900/50 rounded-full border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircleIcon className="h-5 w-5" />
                See AI in Action
              </motion.button>
            </Link>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <blockquote className="relative">
              <div className="relative z-10 max-w-3xl mx-auto text-xl text-gray-300 italic mb-4">
              &apos;{TESTIMONIAL.quote}&apos;
              </div>
              <footer className="relative z-10">
                <div className="text-white font-semibold">{TESTIMONIAL.author}</div>
                <div className="text-gray-400">{TESTIMONIAL.role}, {TESTIMONIAL.company}</div>
              </footer>
            </blockquote>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-400 mb-6">Trusted by Industry Leaders</p>
            <div className="flex justify-center items-center gap-12">
              {TRUSTED_BY.map((company, index) => (
                <div
                  key={index}
                  className="h-12 w-32 bg-gray-800/50 rounded backdrop-blur-sm"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCall