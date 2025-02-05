'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

const COMPANY_INFO = {
  address: '123 AI Boulevard, Tech City, TC 12345',
  email: 'contact@aicompany.com',
  phone: '+1 (555) 123-4567'
}

const FOOTER_LINKS = {
  solutions: [
    { name: 'Financial Services', href: '/solutions/financial' },
    { name: 'Healthcare', href: '/solutions/healthcare' },
    { name: 'Real Estate', href: '/solutions/real-estate' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Venture Studio', href: '/venture-studio' },
    { name: 'Careers', href: '/careers' },
  ],
  resources: [
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Webinars', href: '/resources/webinars' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ]
}

const Footer = () => {
  return (
    <footer className="relative bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-gray-900 to-transparent" />
      </div>

      <div className="container relative mx-auto px-8 lg:px-16 pt-16 pb-8 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                LOGO
              </span>
            </Link>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-blue-400" />
                {COMPANY_INFO.address}
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.solutions.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 mt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {/* Add social media links here if needed */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer