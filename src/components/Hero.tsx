import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titles = ['Developer', 'Designer', 'Creator', 'Innovator']
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-purple-100/30 to-pink-100/30" />
        
        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(168, 85, 247, 0.2)'
              } 0%, transparent 70%)`,
              left: `${20 * i}%`,
              top: `${20 * i}%`,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Interactive Light */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar with Glow Effect */}
          <motion.div
            className="relative inline-block mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary-500 neon-glow">
              <img
                src="/assets/images/avatar.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/160'
                }}
              />
            </div>
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 opacity-75 blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text text-glow">Your Name</span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            className="text-2xl md:text-3xl text-gray-300 mb-8 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a{' '}
            <motion.span
              key={currentTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-primary-600 dark:text-primary-400 font-semibold"
            >
              {titles[currentTitle]}
            </motion.span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about creating beautiful and functional digital experiences. 
            Turning ideas into reality through code and design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl text-white"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 glass-effect rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-gray-200"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-primary-600 dark:border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero