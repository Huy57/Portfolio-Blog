import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50) // Use 0-100 scale
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Auto play when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = volume / 100
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Auto-play blocked. Click the music button to start.')
          setShowControls(true)
          setTimeout(() => setShowControls(false), 5000)
        }
      }
    }
    
    // Try to play after user interaction
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = volume / 100
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {})
      }
      document.removeEventListener('click', handleUserInteraction)
    }
    
    setTimeout(playAudio, 1000)
    document.addEventListener('click', handleUserInteraction)
    
    return () => {
      document.removeEventListener('click', handleUserInteraction)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
  }

  const handleControlsToggle = () => {
    setShowControls(!showControls)
    
    if (!showControls) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/musics/background_music.mp3"
        loop
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <div className="relative">
          {/* Main Music Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleControlsToggle}
            className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
          >
            <motion.div
              animate={isPlaying ? {
                scale: [1, 1.2, 1],
              } : {}}
              transition={{
                duration: 1,
                repeat: isPlaying ? Infinity : 0,
              }}
              className="text-2xl"
            >
              {isPlaying ? '🎵' : '🎶'}
            </motion.div>
          </motion.button>

          {/* Controls Panel */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="absolute bottom-0 left-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 flex items-center gap-4 min-w-[280px] border border-gray-200/50 dark:border-gray-700/50"
              >
                {/* Play/Pause Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-lg">
                    {isPlaying ? '⏸️' : '▶️'}
                  </span>
                </motion.button>

                {/* Volume Control */}
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-xl">
                    {volume === 0 ? '🔇' : volume < 30 ? '🔈' : volume < 70 ? '🔉' : '🔊'}
                  </span>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="flex-1 h-2 accent-primary-500"
                    style={{
                      background: `linear-gradient(to right, rgb(59 130 246) ${volume}%, rgb(229 231 235) ${volume}%)`
                    }}
                  />

                  <span className="text-xs text-gray-500 dark:text-gray-400 min-w-[35px]">
                    {volume}%
                  </span>
                </div>

                {/* Now Playing Info */}
                <div className="border-l border-gray-300 dark:border-gray-600 pl-4">
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-xs text-gray-600 dark:text-gray-400"
                  >
                    {isPlaying ? 'Now Playing' : 'Paused'}
                  </motion.div>
                  <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">Music</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Notes Animation */}
        {isPlaying && (
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -30,
                  x: (i - 1) * 15,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute text-xl"
              >
                ♪
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  )
}

export default MusicPlayer