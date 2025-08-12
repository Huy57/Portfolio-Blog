import { motion } from 'framer-motion'
import { useState } from 'react'
import { Project } from '../types'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState('all')

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Modern online shopping platform with real-time inventory',
      longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.',
      image: '/assets/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.com',
      startDate: '2023-01',
      endDate: '2023-06',
      role: 'Full Stack Developer',
      teamSize: 4,
      highlights: [
        'Increased conversion rate by 35%',
        'Handled 10,000+ daily active users',
        'Integrated with 5 payment gateways'
      ]
    },
    {
      id: '2',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      longDescription: 'Real-time analytics platform that aggregates data from multiple social media platforms, providing insights and automated reporting.',
      image: '/assets/images/project2.jpg',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js', 'Docker'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.com',
      startDate: '2022-08',
      endDate: '2023-01',
      role: 'Frontend Lead',
      teamSize: 6,
      highlights: [
        'Real-time data visualization',
        'Automated report generation',
        'Multi-platform integration'
      ]
    },
    {
      id: '3',
      title: 'Task Management System',
      description: 'Collaborative project management tool',
      longDescription: 'Feature-rich task management application with team collaboration, time tracking, and project analytics.',
      image: '/assets/images/project3.jpg',
      technologies: ['React', 'Express', 'MySQL', 'Socket.io', 'Redis'],
      githubUrl: 'https://github.com/yourusername/project3',
      startDate: '2022-03',
      endDate: '2022-07',
      role: 'Backend Developer',
      teamSize: 3,
      highlights: [
        'Real-time collaboration features',
        'Advanced filtering and search',
        'Custom workflow automation'
      ]
    }
  ]

  const categories = ['all', ...new Set(projects.flatMap(p => p.technologies))]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter))

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.slice(0, 8).map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/400x300?text=${project.title}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 bg-dark-200/80 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                      >
                        <span>🔗</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 bg-dark-200/80 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                      >
                        <span>🌐</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.role}</span>
                    <span>{project.startDate.split('-')[0]}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-t-2xl"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/800x400?text=${selectedProject.title}`
                }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-dark-200/80 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 gradient-text">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-400">Project Info</h3>
                  <div className="space-y-2 text-gray-400">
                    <p><span className="text-gray-500">Role:</span> {selectedProject.role}</p>
                    <p><span className="text-gray-500">Team Size:</span> {selectedProject.teamSize || 'Solo'}</p>
                    <p><span className="text-gray-500">Duration:</span> {selectedProject.startDate} - {selectedProject.endDate || 'Present'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-400">Key Highlights</h3>
                  <ul className="space-y-1 text-gray-400">
                    {selectedProject.highlights?.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-dark-200 rounded-full hover:bg-dark-100 transition-colors"
                  >
                    View on GitHub
                  </motion.a>
                )}
                {selectedProject.liveUrl && (
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
                  >
                    View Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects