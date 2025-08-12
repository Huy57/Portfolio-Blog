import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = () => {
    logout()
    navigate('/admin')
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'projects', name: 'Projects', icon: '💼' },
    { id: 'gallery', name: 'Gallery', icon: '🖼️' },
    { id: 'timeline', name: 'Timeline', icon: '📅' },
    { id: 'skills', name: 'Skills', icon: '💡' },
    { id: 'contact', name: 'Contact', icon: '📧' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ]

  const stats = [
    { label: 'Total Projects', value: '12', change: '+2', icon: '💼' },
    { label: 'Gallery Items', value: '45', change: '+5', icon: '🖼️' },
    { label: 'Skills', value: '16', change: '+1', icon: '💡' },
    { label: 'Messages', value: '23', change: '+7', icon: '📧' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Admin Dashboard
            </motion.h1>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Welcome, {user?.username}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
              >
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Navigation</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                        : 'hover:bg-white/5 text-gray-300'
                    }`}
                  >
                    <span className="text-xl mr-3">{tab.icon}</span>
                    {tab.name}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors"
                >
                  + Add Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors"
                >
                  + Upload Image
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors"
                >
                  + Update Timeline
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            {/* Stats Grid */}
            {activeTab === 'overview' && (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="glass-effect rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl">{stat.icon}</span>
                        <span className="text-xs text-green-400">{stat.change}</span>
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="glass-effect rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {[
                      { action: 'New project added', time: '2 hours ago', icon: '💼' },
                      { action: 'Gallery updated', time: '5 hours ago', icon: '🖼️' },
                      { action: 'Timeline modified', time: '1 day ago', icon: '📅' },
                      { action: 'Profile updated', time: '2 days ago', icon: '👤' }
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-dark-200/30 rounded-lg"
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{activity.icon}</span>
                          <span>{activity.action}</span>
                        </div>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Content Editor Forms */}
            {activeTab !== 'overview' && (
              <div className="glass-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">
                  Edit {tabs.find(t => t.id === activeTab)?.name}
                </h2>
                
                {/* Sample Form for Profile */}
                {activeTab === 'profile' && (
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Title</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none"
                          placeholder="Full Stack Developer"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Bio</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
                        placeholder="Write about yourself..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Profile Image</label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                        <span className="text-4xl">📸</span>
                        <p className="text-gray-400 mt-2">Drop image here or click to upload</p>
                        <input type="file" className="hidden" accept="image/*" />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg font-semibold"
                      >
                        Save Changes
                      </motion.button>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 glass-effect rounded-lg font-semibold"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </form>
                )}

                {/* Sample List for Projects */}
                {activeTab === 'projects' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-gray-400">Manage your projects</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-primary-600 rounded-lg"
                      >
                        + Add New Project
                      </motion.button>
                    </div>
                    
                    <div className="space-y-4">
                      {['E-Commerce Platform', 'Social Media Dashboard', 'Task Management System'].map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-dark-200/30 rounded-lg"
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">💼</span>
                            <div>
                              <p className="font-semibold">{project}</p>
                              <p className="text-sm text-gray-500">Last updated: 2 days ago</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-white/10 rounded">✏️</button>
                            <button className="p-2 hover:bg-red-600/20 rounded text-red-400">🗑️</button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Placeholder for other tabs */}
                {!['overview', 'profile', 'projects'].includes(activeTab) && (
                  <div className="text-center py-12">
                    <span className="text-6xl">🚧</span>
                    <p className="text-xl text-gray-400 mt-4">
                      {tabs.find(t => t.id === activeTab)?.name} editor coming soon!
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard