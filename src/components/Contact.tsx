import { motion } from 'framer-motion'
import { useState } from 'react'
import { SocialLink } from '../types'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const socialLinks: SocialLink[] = [
    {
      id: '1',
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐙',
      username: '@yourusername'
    },
    {
      id: '2',
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼',
      username: 'Your Name'
    },
    {
      id: '3',
      platform: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦',
      username: '@yourusername'
    },
    {
      id: '4',
      platform: 'Facebook',
      url: 'https://facebook.com/yourusername',
      icon: '📘',
      username: 'Your Name'
    },
    {
      id: '5',
      platform: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: '📷',
      username: '@yourusername'
    },
    {
      id: '6',
      platform: 'YouTube',
      url: 'https://youtube.com/@yourusername',
      icon: '📺',
      username: '@yourusername'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg font-semibold hover:from-primary-700 hover:to-purple-700 transition-all neon-glow"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-lg">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-lg">+84 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-lg">Ho Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center p-3 bg-dark-200/50 rounded-lg hover:bg-primary-600/20 transition-all group"
                    >
                      <span className="text-2xl mr-3 group-hover:animate-bounce">{link.icon}</span>
                      <div>
                        <p className="text-sm text-gray-400">{link.platform}</p>
                        <p className="text-xs text-primary-400">{link.username}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                    <span className="text-lg font-semibold">Available for freelance</span>
                  </div>
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="text-2xl"
                  >
                    👋
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact