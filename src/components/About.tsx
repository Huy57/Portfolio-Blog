import { motion } from 'framer-motion'
import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('personal')

  const personalInfo = {
    name: 'Your Name',
    title: 'Full Stack Developer',
    email: 'your.email@example.com',
    phone: '+84 123 456 789',
    location: 'Ho Chi Minh City, Vietnam',
    birthday: 'January 1, 1995',
    languages: ['Vietnamese', 'English'],
    interests: ['Coding', 'Design', 'Music', 'Travel', 'Photography']
  }

  const aboutContent = {
    personal: {
      title: 'Personal Story',
      content: `I'm a passionate developer with a love for creating innovative digital solutions. 
      My journey in tech started with curiosity and has evolved into a career dedicated to 
      building meaningful applications that make a difference.`,
      icon: '👤'
    },
    mission: {
      title: 'My Mission',
      content: `To leverage technology in creating solutions that improve people's lives. 
      I believe in the power of code to transform ideas into reality and am committed to 
      continuous learning and growth in this ever-evolving field.`,
      icon: '🎯'
    },
    values: {
      title: 'Core Values',
      content: `Innovation, Quality, and User-Centric Design are at the heart of everything I do. 
      I strive for excellence in every project, ensuring that the end result not only meets 
      but exceeds expectations.`,
      icon: '💎'
    }
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-primary-500 mr-6">
                  <img
                    src="/assets/images/avatar.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/96'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
                  <p className="text-primary-400">{personalInfo.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎂</span>
                  <div>
                    <p className="text-gray-400 text-sm">Birthday</p>
                    <p className="text-white">{personalInfo.birthday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-2">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Tabs Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col"
            >
              {/* Tab Buttons */}
              <div className="flex gap-4 mb-8">
                {Object.keys(aboutContent).map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white neon-glow'
                        : 'glass-effect text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{aboutContent[tab as keyof typeof aboutContent].icon}</span>
                    {aboutContent[tab as keyof typeof aboutContent].title}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-effect rounded-2xl p-8 flex-1"
              >
                <h3 className="text-3xl font-bold mb-6 gradient-text">
                  {aboutContent[activeTab as keyof typeof aboutContent].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {aboutContent[activeTab as keyof typeof aboutContent].content}
                </p>

                {/* Additional Content Based on Tab */}
                {activeTab === 'values' && (
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {['Innovation', 'Quality', 'Design'].map((value, index) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 glass-effect rounded-lg"
                      >
                        <div className="text-3xl mb-2">
                          {value === 'Innovation' ? '💡' : value === 'Quality' ? '⭐' : '🎨'}
                        </div>
                        <p className="text-sm text-primary-400">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'mission' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 p-4 bg-gradient-to-r from-primary-900/20 to-purple-900/20 rounded-lg border border-primary-500/30"
                  >
                    <p className="text-primary-400 italic">
                      "The best way to predict the future is to create it." - Peter Drucker
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full font-semibold self-start neon-glow"
              >
                <span className="mr-2">📄</span>
                Download CV
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About