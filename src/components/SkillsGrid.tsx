
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SkillsGridProps {
  isDark: boolean;
}

const SkillsGrid = ({ isDark }: SkillsGridProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = [
    // Frontend
    { name: 'React', level: 95, category: 'Frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'Vue.js', level: 90, category: 'Frontend', color: 'from-green-400 to-green-600' },
    { name: 'JavaScript', level: 92, category: 'Frontend', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', level: 88, category: 'Frontend', color: 'from-blue-500 to-indigo-600' },
    { name: 'HTML5', level: 98, category: 'Frontend', color: 'from-orange-400 to-red-500' },
    { name: 'CSS3', level: 95, category: 'Frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', level: 93, category: 'Frontend', color: 'from-cyan-400 to-blue-500' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'Backend', color: 'from-green-500 to-green-700' },
    { name: 'Python', level: 80, category: 'Backend', color: 'from-yellow-500 to-blue-500' },
    { name: 'PHP', level: 75, category: 'Backend', color: 'from-purple-500 to-purple-700' },
    { name: 'Express.js', level: 82, category: 'Backend', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', level: 78, category: 'Backend', color: 'from-green-600 to-green-800' },
    { name: 'MySQL', level: 80, category: 'Backend', color: 'from-blue-500 to-blue-700' },
    
    // Design
    { name: 'Figma', level: 90, category: 'Design', color: 'from-purple-400 to-pink-500' },
    { name: 'Adobe Photoshop', level: 85, category: 'Design', color: 'from-blue-600 to-blue-800' },
    { name: 'Adobe After Effects', level: 80, category: 'Design', color: 'from-purple-600 to-purple-800' },
    { name: 'Adobe Premiere Pro', level: 82, category: 'Design', color: 'from-purple-500 to-pink-600' },
    { name: 'Canva', level: 95, category: 'Design', color: 'from-cyan-400 to-blue-500' },
    
    // Tools
    { name: 'Git', level: 88, category: 'Tools', color: 'from-red-500 to-red-700' },
    { name: 'GitHub', level: 90, category: 'Tools', color: 'from-gray-700 to-gray-900' },
    { name: 'VS Code', level: 95, category: 'Tools', color: 'from-blue-500 to-blue-700' },
    { name: 'Vite', level: 85, category: 'Tools', color: 'from-yellow-400 to-orange-500' }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover-lift ${
              activeCategory === category
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg glow-cyan'
                : isDark 
                  ? 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className={`p-4 sm:p-6 rounded-xl transition-all duration-500 transform hover:scale-105 group animate-fade-in hover-lift ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            } shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-cyan-400/30 glow-cyan pulse-glow`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className={`font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.name}
              </h3>
              <Badge 
                variant="secondary" 
                className="text-xs group-hover:scale-110 transition-transform duration-300"
              >
                {skill.level}%
              </Badge>
            </div>
            
            {/* Progress Bar */}
            <div className={`w-full rounded-full h-2 sm:h-3 mb-2 ${
              isDark ? 'bg-gray-700' : 'bg-gray-200'
            } overflow-hidden`}>
              <div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out transform origin-left group-hover:animate-pulse`}
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${index * 150}ms`
                }}
              />
            </div>
            
            {/* Category Tag */}
            <div className="flex justify-between items-center">
              <span className={`text-xs ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              } group-hover:text-cyan-400 transition-colors duration-300`}>
                {skill.category}
              </span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-8 sm:mt-12 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {categories.slice(1).map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const avgLevel = Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length);
            
            return (
              <div
                key={category}
                className={`p-3 sm:p-4 rounded-lg transition-all duration-300 hover:scale-105 transform animate-fade-in hover-lift ${
                  isDark ? 'bg-gray-800/50' : 'bg-white/50'
                } backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 glow-cyan`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} gradient-text`}>
                  {avgLevel}%
                </div>
                <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {category}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
