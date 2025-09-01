import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificateAreas = [
    {
      area: 'Flutter Development',
      count: 4,
      description: 'Advanced mobile app development with Flutter and Dart'
    },
    {
      area: 'Cloud Technologies',
      count: 3,
      description: 'Firebase, cloud databases, and serverless architectures'
    },
    {
      area: 'Software Engineering',
      count: 2,
      description: 'Best practices, testing, and software quality assurance'
    },
    {
      area: 'Data Science',
      count: 1,
      description: 'Data analysis, machine learning, and health insights'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
            <Award className="mr-3" size={24} />
            10 Professional Certificates Completed
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificateAreas.map((cert, index) => (
            <div 
              key={cert.area}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-teal-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.area}</h3>
                  <p className="text-teal-600 font-medium mb-2">{cert.count} Certificate{cert.count > 1 ? 's' : ''}</p>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            Certificates span Flutter, Cloud technologies, Software Engineering, and Data Science
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;