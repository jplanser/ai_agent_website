'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface SuccessStory {
  client: string;
  industry: string;
  impact: string;
  slug: string;
}

const successStories: SuccessStory[] = [
  {
    client: 'XYZ Bank',
    industry: 'Financial Services',
    impact: 'AI-powered claims processing reduced processing time by 80% and increased accuracy by 90%.',
    slug: 'xyz-bank-case-study'
  },
  {
    client: 'ABC Healthcare',
    industry: 'Healthcare',
    impact: 'Automated patient record management saved 500+ admin hours monthly.',
    slug: 'abc-healthcare-case-study'
  },
  {
    client: 'DEF Realty',
    industry: 'Real Estate',
    impact: 'AI tenant automation reduced response times from 24 hours to 5 minutes.',
    slug: 'def-realty-case-study'
  }
];

export default function CustomerSuccess() {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20" />
      </div>

      <div className="container relative mx-auto px-8 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              See How{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                AI Agents
              </span>{' '}
              Are Transforming Businesses
            </h2>
            <Link href="/case-studies" className="inline-block mt-8">
              <motion.button
                className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 text-lg rounded-lg overflow-hidden flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Read More Case Studies</span>
                <ArrowRightIcon className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right side - Success Stories */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              {successStories.map((story, index) => (
                <Link href={`/case-studies/${story.slug}`} key={index} className="block">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group relative cursor-pointer"
                  >
                    {/* Glowing background effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-300" />
                    
                    {/* Card content */}
                    <div className="relative flex flex-col md:flex-row items-start p-6 rounded-2xl bg-gray-900/90 backdrop-blur-sm border border-gray-800/50">
                      {/* Left column with client info */}
                      <div className="md:w-1/3 mb-4 md:mb-0 pr-6 border-r border-gray-700/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                            {story.industry}
                          </span>
                        </div>
                        <h3 className="font-bold text-2xl text-white group-hover:text-blue-400 transition-colors">
                          {story.client}
                        </h3>
                      </div>

                      {/* Right column with impact */}
                      <div className="md:w-2/3 md:pl-6">
                        <div className="relative">
                          <div className="absolute -left-9 top-1/2 -translate-y-1/2 h-[2px] w-6 bg-gradient-to-r from-transparent to-blue-500 md:block hidden" />
                          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 backdrop-blur-sm">
                            <p className="text-gray-300 text-lg leading-relaxed">
                              {story.impact}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Read Full Case Study overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-lg font-semibold flex items-center gap-2">
                          Read Full Case Study
                          <ArrowRightIcon className="h-5 w-5" />
                        </span>
                      </div>

                      {/* Hover line effect */}
                      <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}