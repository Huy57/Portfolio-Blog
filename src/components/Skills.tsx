import { motion } from 'framer-motion'
import { Skill } from '../types'

const Skills = () => {
  const skills: Skill[] = [
    // Technical Skills
    { id: '1', name: 'React', category: 'technical', level: 90, color: '#61DAFB' },
    { id: '2', name: 'TypeScript', category: 'technical', level: 85, color: '#3178C6' },
    { id: '3', name: 'Node.js', category: 'technical', level: 80, color: '#339933' },
    { id: '4', name: 'Python', category: 'technical', level: 75, color: '#3776AB' },
    { id: '5', name: 'MongoDB', category: 'technical', level: 70, color: '#47A248' },
    { id: '6', name: 'PostgreSQL', category: 'technical', level: 75, color: '#4169E1' },
    
    // Tools
    { id: '7', name: 'Git', category: 'tool', level: 85, color: '#F05032' },
    { id: '8', name: 'Docker', category: 'tool', level: 70, color: '#2496ED' },
    { id: '9', name: 'AWS', category: 'tool', level: 65, color: '#FF9900' },
    { id: '10', name: 'Figma', category: 'tool', level: 80, color: '#F24E1E' },
    
    // Soft Skills
    { id: '11', name: 'Leadership', category: 'soft', level: 85, color: '#8B5CF6' },
    { id: '12', name: 'Communication', category: 'soft', level: 90, color: '#EC4899' },
    { id: '13', name: 'Problem Solving', category: 'soft', level: 95, color: '#10B981' },
    { id: '14', name: 'Teamwork', category: 'soft', level: 90, color: '#F59E0B' },
    
    // Languages
    { id: '15', name: 'Vietnamese', category: 'language', level: 100, color: '#EF4444' },
    { id: '16', name: 'English', category: 'language', level: 80, color: '#3B82F6' }
  ]

  const categories = {
    technical: { label: 'Technical Skills', icon: '💻' },
    tool: { label: 'Tools & Platforms', icon: '🛠️' },
    soft: { label: 'Soft Skills', icon: '🤝' },
    language: { label: 'Languages', icon: '🌐' }
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">
                    {categories[category as keyof typeof categories].icon}
                  </span>
                  <h3 className="text-2xl font-bold">
                    {categories[category as keyof typeof categories].label}
                  </h3>
                </div>

                <div className="space-y-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-3 bg-dark-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="absolute h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 opacity-50"
                            animate={{
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            style={{
                              background: `linear-gradient(90deg, transparent, white, transparent)`,
                              backgroundSize: '200% 100%',
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 glass-effect rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  5+
                </motion.div>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  50+
                </motion.div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  30+
                </motion.div>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  15+
                </motion.div>
                <p className="text-gray-400">Technologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills