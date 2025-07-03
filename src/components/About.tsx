
import React from 'react';
import { Badge } from '@/components/ui/badge';
import CertificatesSection from '@/components/CertificatesSection';

interface AboutProps {
  isDark: boolean;
}

const About = ({ isDark }: AboutProps) => {
  return (
    <section id="about" className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-fade-in">
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My Journey
            </h3>
            <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Currently residing at Pakistan Military Academy in Abbottabad, I'm passionate about 
              creating digital experiences that make a difference. My journey in web development 
              started with curiosity and has evolved into expertise across multiple technologies.
            </p>
            <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I specialize in building dynamic, responsive websites and user experiences while 
              maintaining a strong focus on clean code and modern design principles.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Creative', 'Dedicated', 'Problem Solver', 'Team Player'].map((trait, index) => (
                <Badge 
                  key={trait} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 border-cyan-400/30 hover:scale-110 transition-transform duration-300 animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Professional Background
            </h3>
            <p className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              As a certified full-stack web developer, I bring together technical expertise and creative vision to deliver exceptional digital solutions.
            </p>
            <p className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              My experience spans across modern web technologies, UI/UX design, and multimedia content creation.
            </p>
          </div>
        </div>

        <CertificatesSection isDark={isDark} />
      </div>
    </section>
  );
};

export default About;
