'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  BanknotesIcon, 
  HeartIcon, 
  HomeIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline'

const INDUSTRY_DATA = [
  {
    id: 'financial',
    Icon: BanknotesIcon,
    title: 'Financial Services',
    challenges: [
      'Compliance struggles',
      'Slow underwriting',
      'Fraud risks'
    ],
    solutions: [
      'Automated claims processing',
      'Fraud detection',
      'AI-powered underwriting'
    ],
    impacts: [
      '80% faster workflows',
      'Reduced human errors',
      'Real-time fraud alerts'
    ]
  },
  {
    id: 'healthcare',
    Icon: HeartIcon,
    title: 'Healthcare',
    challenges: [
      'Patient data management',
      'Treatment planning',
      'Administrative overhead'
    ],
    solutions: [
      'Automated patient records',
      'AI diagnosis assistance',
      'Smart scheduling'
    ],
    impacts: [
      '60% reduced admin time',
      'Enhanced patient care',
      'Streamlined operations'
    ]
  },
  {
    id: 'realestate',
    Icon: HomeIcon,
    title: 'Real Estate',
    challenges: [
      'Market analysis',
      'Property management',
      'Client communication'
    ],
    solutions: [
      'AI market predictions',
      'Automated property matching',
      'Smart client engagement'
    ],
    impacts: [
      'Faster property sales',
      'Improved client satisfaction',
      'Data-driven decisions'
    ]
  }
]

const WhoWeServe = () => {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRY_DATA[0].id)

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-gray-900 to-purple-900/20" />
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
            Tailored{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AI Solutions
            </span>{' '}
            for Your Industry
          </h2>
        </motion.div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {INDUSTRY_DATA.map((industry) => (
            <motion.button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`w-[240px] px-6 py-3 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2
                ${activeIndustry === industry.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <industry.Icon className="h-5 w-5" />
              {industry.title}
            </motion.button>
          ))}
        </div>

        {/* Content Display */}
        <div className="relative">
          {INDUSTRY_DATA.map((industry) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndustry === industry.id ? 1 : 0,
                position: activeIndustry === industry.id ? 'relative' : 'absolute',
                pointerEvents: activeIndustry === industry.id ? 'auto' : 'none',
              }}
              transition={{ duration: 0.5 }}
              className="w-full"
              style={{
                top: 0,
                left: 0,
                right: 0,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Challenges Card */}
                <div className="group relative bg-gradient-to-br from-indigo-950/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-indigo-800/30 hover:border-indigo-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent rounded-2xl" />
                  <ClockIcon className="h-12 w-12 text-indigo-400 mb-6 relative" />
                  <h3 className="text-xl font-semibold text-white mb-4 relative">Challenges</h3>
                  <ul className="space-y-3 relative">
                    {industry.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-300">{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* Solutions Card */}
                <div className="group relative bg-gradient-to-br from-purple-950/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-2xl" />
                  <ShieldCheckIcon className="h-12 w-12 text-purple-400 mb-6 relative" />
                  <h3 className="text-xl font-semibold text-white mb-4 relative">Our AI Solution</h3>
                  <ul className="space-y-3 relative">
                    {industry.solutions.map((solution, index) => (
                      <li key={index} className="text-gray-300">{solution}</li>
                    ))}
                  </ul>
                </div>

                {/* Impact Card */}
                <div className="group relative bg-gradient-to-br from-blue-950/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl" />
                  <DocumentCheckIcon className="h-12 w-12 text-blue-400 mb-6 relative" />
                  <h3 className="text-xl font-semibold text-white mb-4 relative">Impact</h3>
                  <ul className="space-y-3 relative">
                    {industry.impacts.map((impact, index) => (
                      <li key={index} className="text-gray-300">{impact}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
        {/* CTA Button - added more top margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/solutions">
            <motion.button
              className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore AI Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default WhoWeServe