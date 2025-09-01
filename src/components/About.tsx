import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I am a Computer Science graduate (Class of 2025) with solid experience in Flutter and Cloud technologies. 
            I am passionate about building scalable and user-friendly mobile applications. My graduation project was a 
            <span className="font-semibold text-teal-600"> Smart Plant Healthcare System</span> that used IoT sensors to 
            measure humidity, light, and soil conditions, connected with Firebase and a mobile app. The system automated 
            irrigation and used AI image analysis to detect plant health status and provide recommendations for treatment and care.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">2025</div>
              <div className="text-gray-600 font-medium">Graduate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Major Projects</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">10</div>
              <div className="text-gray-600 font-medium">Certificates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;