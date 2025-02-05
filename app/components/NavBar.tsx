'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}

interface DropdownMenuProps {
  children: React.ReactNode
}

interface DropdownLinkProps {
  href: string
  children: React.ReactNode
}

interface MobileDropdownButtonProps {
  onClick: () => void
  //isOpen: boolean
  children: React.ReactNode
  
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative">
        {/* Glass background effect */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md border-b border-gray-800/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                LOGO
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/" isActive={isActive('/')}>
                Home
              </NavLink>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className={`${
                    isActive('/solutions') 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400'
                  } transition-colors duration-200`}
                >
                  Solutions
                </button>
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <DropdownMenu>
                      <DropdownLink href="/solutions/financial">Financial Services</DropdownLink>
                      <DropdownLink href="/solutions/healthcare">Healthcare</DropdownLink>
                      <DropdownLink href="/solutions/real-estate">Real Estate</DropdownLink>
                    </DropdownMenu>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/venture-studio" isActive={isActive('/venture-studio')}>
                Venture Studio
              </NavLink>

              <NavLink href="/how-it-works" isActive={isActive('/how-it-works')}>
                How It Works
              </NavLink>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button
                  className={`${
                    isActive('/resources') 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400'
                  } transition-colors duration-200`}
                >
                  Resources
                </button>
                <AnimatePresence>
                  {isResourcesOpen && (
                    <DropdownMenu>
                      <DropdownLink href="/resources/blog">Blog</DropdownLink>
                      <DropdownLink href="/resources/case-studies">Case Studies</DropdownLink>
                      <DropdownLink href="/resources/webinars">Webinars</DropdownLink>
                    </DropdownMenu>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/about" isActive={isActive('/about')}>
                About Us
              </NavLink>

              <Link href="/get-started">
                <motion.button
                  className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-black/80 backdrop-blur-md border-t border-gray-800/50"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <MobileNavLink href="/" isActive={isActive('/')}>
                    Home
                  </MobileNavLink>
                  
                  <MobileDropdownButton
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    //isOpen={isSolutionsOpen}
                  >
                    Solutions
                  </MobileDropdownButton>
                  
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1"
                      >
                        <MobileNavLink href="/solutions/financial" isActive={isActive('/solutions/financial')}>
                          Financial Services
                        </MobileNavLink>
                        <MobileNavLink href="/solutions/healthcare" isActive={isActive('/solutions/healthcare')}>
                          Healthcare
                        </MobileNavLink>
                        <MobileNavLink href="/solutions/real-estate" isActive={isActive('/solutions/real-estate')}>
                          Real Estate
                        </MobileNavLink>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <MobileNavLink href="/venture-studio" isActive={isActive('/venture-studio')}>
                    Venture Studio
                  </MobileNavLink>

                  <MobileNavLink href="/how-it-works" isActive={isActive('/how-it-works')}>
                    How It Works
                  </MobileNavLink>

                  <MobileDropdownButton
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    //isOpen={isResourcesOpen}
                  >
                    Resources
                  </MobileDropdownButton>

                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1"
                      >
                        <MobileNavLink href="/resources/blog" isActive={isActive('/resources/blog')}>
                          Blog
                        </MobileNavLink>
                        <MobileNavLink href="/resources/case-studies" isActive={isActive('/resources/case-studies')}>
                          Case Studies
                        </MobileNavLink>
                        <MobileNavLink href="/resources/webinars" isActive={isActive('/resources/webinars')}>
                          Webinars
                        </MobileNavLink>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <MobileNavLink href="/about" isActive={isActive('/about')}>
                    About Us
                  </MobileNavLink>

                  <Link href="/get-started" className="block">
                    <motion.button
                      className="w-full relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}

// Helper Components
const NavLink = ({ href, isActive, children }: NavLinkProps) => (
  <Link
    href={href}
    className={`${
      isActive 
        ? 'text-blue-400' 
        : 'text-gray-300 hover:text-blue-400'
    } transition-colors duration-200`}
  >
    {children}
  </Link>
)

const DropdownMenu = ({ children }: DropdownMenuProps) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="absolute z-10 mt-2 w-48 rounded-xl bg-gray-900/90 backdrop-blur-sm border border-gray-800/50"
  >
    {children}
  </motion.div>
)

const DropdownLink = ({ href, children }: DropdownLinkProps) => (
  <Link
    href={href}
    className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all duration-200"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, isActive, children }: NavLinkProps) => (
  <Link
    href={href}
    className={`block px-3 py-2 rounded-lg ${
      isActive
        ? 'bg-blue-900/30 text-blue-400'
        : 'text-gray-300 hover:bg-gray-800/50 hover:text-blue-400'
    } transition-all duration-200`}
  >
    {children}
  </Link>
)

const MobileDropdownButton = ({ onClick, children }: MobileDropdownButtonProps) => (
  <button
    onClick={onClick}
    className="w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
  >
    {children}
  </button>
)

export default NavBar