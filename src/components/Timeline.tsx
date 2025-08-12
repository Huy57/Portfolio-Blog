import { motion } from 'framer-motion'
import { TimelineItem } from '../types'

const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      id: '1',
      type: 'work',
      title: 'Senior Full Stack Developer',
      organization: 'Tech Company ABC',
      location: 'Ho Chi Minh City',
      startDate: '2022-01',
      endDate: 'Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],
      logo: '/assets/images/company1.png'
    },
    {
      id: '2',
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Startup XYZ',
      location: 'Remote',
      startDate: '2020-06',
      endDate: '2021-12',
      description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience.',
      skills: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
      logo: '/assets/images/company2.png'
    },
    {
      id: '3',
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'University of Technology',
      location: 'Ho Chi Minh City',
      startDate: '2016-09',
      endDate: '2020-06',
      description: 'Graduated with honors, specializing in Software Engineering and Web Development.',
      skills: ['Data Structures', 'Algorithms', 'Web Development', 'Database Design'],
      logo: '/assets/images/university.png'
    }
  ]

  const formatDate = (date: string) => {
    if (date === 'Present') return date
    const [year, month] = date.split('-')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">My Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-600 via-purple-600 to-pink-600 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect rounded-xl p-6 card-hover"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center mr-3">
                            <span className="text-2xl">
                              {item.type === 'work' ? '💼' : '🎓'}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-primary-400">{item.organization}</p>
                          </div>
                        </div>
                      </div>

                      {/* Date and Location */}
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <span className="mr-1">📅</span>
                          {formatDate(item.startDate)} - {formatDate(item.endDate)}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">📍</span>
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">{item.description}</p>

                      {/* Skills */}
                      {item.skills && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary-600 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline