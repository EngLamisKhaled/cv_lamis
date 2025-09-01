import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Dart', level: 90 },
    { name: 'Flutter', level: 90 },
    { name: 'Firebase', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'SQL', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;