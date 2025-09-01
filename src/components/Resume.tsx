import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Download My Complete Resume
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a detailed overview of my education, experience, projects, and achievements in a comprehensive PDF format.
            </p>
          </div>

          <button className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Download className="mr-3" size={24} />
            Download My CV
          </button>

          <div className="mt-8 text-sm text-gray-500">
            <p>Last updated: January 2025 • PDF Format • 2 pages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;