import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Beaver {
  id: string
  x: number
  y: number
  isHit: boolean
  showTime: number
}

const BeaverGame = () => {
  const [beavers, setBeavers] = useState<Beaver[]>([])
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const gameAreaRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Start game
  const startGame = () => {
    setIsPlaying(true)
    setScore(0)
    setBeavers([])
  }

  // Stop game
  const stopGame = () => {
    setIsPlaying(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  // Spawn beaver at random position
  const spawnBeaver = () => {
    // Random position as percentage of game area
    const newBeaver: Beaver = {
      id: `beaver-${Date.now()}-${Math.random()}`,
      x: 10 + Math.random() * 80, // 10% to 90% of width
      y: 10 + Math.random() * 80, // 10% to 90% of height
      isHit: false,
      showTime: Date.now()
    }

    console.log('Spawning beaver at:', newBeaver.x + '%', newBeaver.y + '%')
    setBeavers(prev => [...prev, newBeaver])

    // Auto remove beaver after 3 seconds if not hit
    setTimeout(() => {
      setBeavers(prev => prev.filter(b => b.id !== newBeaver.id))
    }, 3000)
  }

  // Handle beaver click
  const hitBeaver = (beaverId: string) => {
    setBeavers(prev => 
      prev.map(beaver => 
        beaver.id === beaverId 
          ? { ...beaver, isHit: true }
          : beaver
      )
    )
    
    setScore(prev => prev + 10)
    
    // Remove hit beaver after animation
    setTimeout(() => {
      setBeavers(prev => prev.filter(b => b.id !== beaverId))
    }, 1000)

    // Spawn new beaver after 5 seconds
    setTimeout(() => {
      if (isPlaying) {
        spawnBeaver()
      }
    }, 5000)
  }

  // Spawn beavers periodically
  useEffect(() => {
    if (isPlaying) {
      console.log('Game started!')
      
      // Spawn first beaver immediately
      const firstBeaver: Beaver = {
        id: `beaver-${Date.now()}`,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        isHit: false,
        showTime: Date.now()
      }
      setBeavers([firstBeaver])
      
      // Auto remove after 3 seconds
      setTimeout(() => {
        setBeavers(prev => prev.filter(b => b.id !== firstBeaver.id))
      }, 3000)
      
      // Then spawn every 2 seconds
      intervalRef.current = setInterval(() => {
        const newBeaver: Beaver = {
          id: `beaver-${Date.now()}-${Math.random()}`,
          x: 10 + Math.random() * 80,
          y: 10 + Math.random() * 80,
          isHit: false,
          showTime: Date.now()
        }
        
        setBeavers(prev => [...prev, newBeaver])
        
        // Auto remove after 3 seconds
        setTimeout(() => {
          setBeavers(prev => prev.filter(b => b.id !== newBeaver.id))
        }, 3000)
      }, 2000)

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    } else {
      // Clean up when game stops
      setBeavers([])
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  return (
    <>
      {/* Game Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowGame(!showGame)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
      >
        <motion.span
          animate={{ rotate: showGame ? 180 : 0 }}
          className="text-2xl"
        >
          🦫
        </motion.span>
      </motion.button>

      {/* Game Modal */}
      <AnimatePresence>
        {showGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowGame(false)
                stopGame()
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Game Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold gradient-text">Whack-a-Beaver!</h2>
                  <p className="text-gray-600 dark:text-gray-400">Click the beavers as they appear!</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">{score}</div>
                    <div className="text-sm text-gray-500">Score</div>
                  </div>
                  <button
                    onClick={() => {
                      setShowGame(false)
                      stopGame()
                    }}
                    className="w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Game Controls */}
              <div className="flex justify-center gap-4 mb-4">
                {!isPlaying ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startGame}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg"
                  >
                    Start Game
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={stopGame}
                    className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold shadow-lg"
                  >
                    Stop Game
                  </motion.button>
                )}
              </div>

              {/* Game Area */}
              <div 
                ref={gameAreaRef}
                className="relative h-[500px] bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)
                  `
                }}
              >
                {/* Instructions */}
                {!isPlaying && beavers.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [-5, 5, -5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity 
                        }}
                        className="text-6xl mb-4"
                      >
                        🦫
                      </motion.div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Press Start to begin the game!
                      </p>
                    </div>
                  </div>
                )}

                {/* Beavers */}
                <AnimatePresence>
                  {beavers.map((beaver) => (
                    <motion.div
                      key={beaver.id}
                      initial={{ 
                        scale: 0,
                        rotate: -180
                      }}
                      animate={{ 
                        scale: beaver.isHit ? [1, 1.2, 0] : [0, 1.1, 1],
                        rotate: beaver.isHit ? [0, 360] : 0,
                        y: beaver.isHit ? -30 : 0
                      }}
                      exit={{ 
                        scale: 0,
                        opacity: 0,
                        rotate: 180
                      }}
                      transition={{ 
                        duration: beaver.isHit ? 1 : 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${beaver.x}%`,
                        top: `${beaver.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => !beaver.isHit && hitBeaver(beaver.id)}
                    >
                      {/* Beaver Body */}
                      <motion.div
                        animate={beaver.isHit ? {} : {
                          x: [0, -5, 5, 0],
                          y: [0, -3, 3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: beaver.isHit ? 0 : Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative"
                      >
                        {/* Shadow */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black/20 rounded-full blur-sm" />
                        
                        {/* Beaver Emoji */}
                        <div className="text-5xl select-none">
                          {beaver.isHit ? '😵‍💫' : '🦫'}
                        </div>
                        
                        {/* Hit Effect */}
                        {beaver.isHit && (
                          <>
                            <motion.div
                              initial={{ scale: 0, opacity: 1 }}
                              animate={{ scale: 2, opacity: 0 }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <span className="text-2xl font-bold text-yellow-500">+10</span>
                            </motion.div>
                            {/* Stars when dizzy */}
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ 
                                  scale: 0,
                                  x: 0,
                                  y: 0
                                }}
                                animate={{ 
                                  scale: [0, 1, 0],
                                  x: [0, (i - 1) * 30],
                                  y: [0, -20],
                                  rotate: 360
                                }}
                                transition={{
                                  duration: 1,
                                  delay: i * 0.1
                                }}
                                className="absolute top-0 left-1/2 transform -translate-x-1/2"
                              >
                                ⭐
                              </motion.div>
                            ))}
                          </>
                        )}
                        
                        {/* Peeking animation */}
                        {!beaver.isHit && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                            className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                          >
                            <span className="text-xs">👀</span>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-200/30 to-transparent dark:from-green-800/30" />
                
                {/* Grass */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-0"
                    style={{ left: `${i * 12.5}%` }}
                    animate={{
                      rotate: [-3, 3, -3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-4xl opacity-50">🌱</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default BeaverGame