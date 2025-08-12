import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import MusicPlayer from '../components/MusicPlayer'
import ThemeToggle from '../components/ThemeToggle'
import BeaverGame from '../components/BeaverGame'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <MusicPlayer />
      <ThemeToggle />
      <BeaverGame />
      
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />
        <div className="absolute inset-0">
          {/* Animated Background Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 glass-effect">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full flex items-center justify-center shadow-lg z-40 text-white"
      >
        <span className="text-xl">↑</span>
      </motion.button>
    </div>
  )
}

export default Home