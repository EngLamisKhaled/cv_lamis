import React from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or exciting projects. 
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:eng.lamiskhaled@gmail.com"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-teal-50 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                <Mail className="text-teal-600 group-hover:text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-sm text-gray-600 text-center break-all">eng.lamiskhaled@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/lamis-khaled"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-teal-50 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                <Linkedin className="text-teal-600 group-hover:text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
              <p className="text-sm text-gray-600 text-center">Professional Network</p>
            </a>

            <a
              href="https://github.com/EngLamisKhaled"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-teal-50 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                <Github className="text-teal-600 group-hover:text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">GitHub</h4>
              <p className="text-sm text-gray-600 text-center">Code Repository</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;