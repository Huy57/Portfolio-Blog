import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-purple dark:from-primary-600 dark:to-accent-indigo rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {theme === 'light' ? (
          <div className="relative">
            {/* Sun Icon */}
            <div className="w-6 h-6 bg-yellow-400 rounded-full relative">
              {/* Sun Rays */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-2 bg-yellow-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px)`,
                  }}
                  animate={{
                    scaleY: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Moon Icon */}
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 bg-gray-300 rounded-full" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-800 dark:bg-gray-900 rounded-full" />
              {/* Stars */}
              {[
                { top: '-8px', left: '-8px', size: '2px' },
                { top: '-4px', right: '-10px', size: '1.5px' },
                { bottom: '-8px', left: '-6px', size: '1px' },
                { bottom: '-6px', right: '-8px', size: '2px' },
              ].map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    ...star,
                    width: star.size,
                    height: star.size,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-16 -right-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs px-3 py-1 rounded-lg pointer-events-none whitespace-nowrap"
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        <div className="absolute -top-1 right-5 w-2 h-2 bg-gray-800 dark:bg-gray-200 transform rotate-45" />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle