import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GalleryItem } from '../types'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      type: 'image',
      title: 'Conference Presentation',
      description: 'Speaking at Tech Conference 2023',
      url: '/assets/images/gallery1.jpg',
      thumbnail: '/assets/images/gallery1-thumb.jpg',
      category: 'events',
      date: '2023-10-15',
      tags: ['conference', 'speaking', 'tech']
    },
    {
      id: '2',
      type: 'image',
      title: 'Team Building',
      description: 'Company team building activity',
      url: '/assets/images/gallery2.jpg',
      thumbnail: '/assets/images/gallery2-thumb.jpg',
      category: 'team',
      date: '2023-09-20',
      tags: ['team', 'fun', 'bonding']
    },
    {
      id: '3',
      type: 'document',
      title: 'Certificate of Excellence',
      description: 'AWS Certification',
      url: '/assets/documents/certificate1.pdf',
      thumbnail: '/assets/images/cert-thumb.jpg',
      category: 'achievements',
      date: '2023-08-10',
      tags: ['certification', 'aws', 'cloud']
    },
    {
      id: '4',
      type: 'image',
      title: 'Workspace Setup',
      description: 'My productive workspace',
      url: '/assets/images/gallery3.jpg',
      thumbnail: '/assets/images/gallery3-thumb.jpg',
      category: 'personal',
      date: '2023-07-05',
      tags: ['workspace', 'setup', 'productivity']
    },
    {
      id: '5',
      type: 'image',
      title: 'Hackathon Winner',
      description: 'First place at Hackathon 2023',
      url: '/assets/images/gallery4.jpg',
      thumbnail: '/assets/images/gallery4-thumb.jpg',
      category: 'achievements',
      date: '2023-06-15',
      tags: ['hackathon', 'winner', 'achievement']
    },
    {
      id: '6',
      type: 'image',
      title: 'Workshop Training',
      description: 'Conducting React workshop',
      url: '/assets/images/gallery5.jpg',
      thumbnail: '/assets/images/gallery5-thumb.jpg',
      category: 'events',
      date: '2023-05-20',
      tags: ['workshop', 'teaching', 'react']
    }
  ]

  const categories = [
    { id: 'all', name: 'All', icon: '🎯' },
    { id: 'events', name: 'Events', icon: '📅' },
    { id: 'team', name: 'Team', icon: '👥' },
    { id: 'achievements', name: 'Achievements', icon: '🏆' },
    { id: 'personal', name: 'Personal', icon: '👤' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Gallery & Memories</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white neon-glow'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
              >
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedItem(item)}
                  className="glass-effect rounded-xl overflow-hidden cursor-pointer card-hover group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.thumbnail || item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/400x300?text=${item.title}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-60" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-600/80 rounded-full text-xs font-semibold">
                        {item.type === 'image' ? '🖼️ Image' : '📄 Document'}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="text-white text-center"
                      >
                        <div className="text-4xl mb-2">👁️</div>
                        <p className="text-sm">View Details</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Date */}
                    <p className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📸</div>
              <p className="text-xl text-gray-400">No items found in this category</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ✕
              </button>

              {/* Content */}
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/800x600?text=${selectedItem.title}`
                  }}
                />
              ) : (
                <div className="glass-effect rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                    <p className="text-gray-400 mb-6">{selectedItem.description}</p>
                    <motion.a
                      href={selectedItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full font-semibold"
                    >
                      View Document
                    </motion.a>
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="glass-effect rounded-lg p-6 mt-4">
                <h3 className="text-xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-gray-400 mb-4">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery