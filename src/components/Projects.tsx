import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Plant Healthcare System',
      subtitle: 'Graduation Project',
      description: 'IoT, Firebase, AI-based plant health monitoring and automation system using sensors to measure humidity, light, and soil conditions.',
      technologies: ['Flutter', 'Firebase', 'IoT', 'AI', 'Image Analysis']
    },
    {
      title: 'Data Science Health Insights',
      subtitle: 'Data Analysis Project',
      description: 'A full pipeline for patient health risk assessment using the Framingham dataset with comprehensive analysis and predictions.',
      technologies: ['Python', 'Data Science', 'Machine Learning', 'Healthcare']
    },
    {
      title: 'Instagram Clone (SQA)',
      subtitle: 'Database & Testing Project',
      description: 'Database cloning with MySQL, Java test scripts, Excel test cases, and comprehensive documentation for quality assurance.',
      technologies: ['MySQL', 'Java', 'Testing', 'Documentation']
    },
    {
      title: 'PetCare App',
      subtitle: 'Mobile Application',
      description: 'Flutter app for pet clinics with login, registration, and searchable doctor dashboard for efficient clinic management.',
      technologies: ['Flutter', 'Dart', 'Authentication', 'Database']
    },
    {
      title: 'Reserva Booking',
      subtitle: 'Booking System',
      description: 'Multi-transport booking system supporting bus, train, plane, and car reservations with authentication and database integration.',
      technologies: ['Flutter', 'Authentication', 'Database', 'Multi-platform']
    },
    {
      title: 'Fastudy',
      subtitle: 'Educational Platform',
      description: 'Flutter app for students to upload and share study notes (PDFs) with Firebase backend and Google Sign-In integration.',
      technologies: ['Flutter', 'Firebase', 'Google Auth', 'File Management']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-teal-600 font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors">
                  <Github size={16} />
                  <span className="text-sm font-medium">View Code</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors">
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;