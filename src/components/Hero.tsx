import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Lamis Khaled
            <span className="block text-3xl md:text-4xl text-teal-600 font-medium mt-2">
              Computer Science Graduate
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable and user-friendly mobile applications with Flutter and Cloud technologies
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/EngLamisKhaled"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 hover:bg-teal-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lamis-khaled"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 hover:bg-teal-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:eng.lamiskhaled@gmail.com"
            className="p-3 bg-gray-100 hover:bg-teal-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronDown size={32} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;