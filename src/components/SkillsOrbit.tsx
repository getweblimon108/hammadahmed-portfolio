
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsOrbit = ({ isDark }: { isDark: boolean }) => {
  const [activeOrbit, setActiveOrbit] = useState(0);

  // Tech icons as SVG components
  const techIcons = {
    html5: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
    vue: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4FC08D" d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.015-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.988-1.36-1.56z"/>
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#06B6D4" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.946-0.922-1.604V6.921 c0-0.658,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.946,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.724 10.217-.18 4.065 2.778 8.5 5.282 9.596.42.73.727 1.21.727 1.21s.238-.3.727-1.21c2.504-1.096 5.462-5.531 5.282-9.596-.046-1.115-.123-2.273-.463-4.846z"/>
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#F24E1E" d="M15.5 2.25a3.25 3.25 0 0 1 0 6.5H12V2.25h3.5Z"/>
        <path fill="#A259FF" d="M12 2.25H8.5a3.25 3.25 0 0 0 0 6.5H12V2.25Z"/>
        <path fill="#FF7262" d="M12 8.75H8.5a3.25 3.25 0 0 0 0 6.5H12V8.75Z"/>
        <path fill="#1ABCFE" d="M12 15.25H8.5a3.25 3.25 0 1 0 3.25 3.25V15.25H12Z"/>
        <path fill="#0ACF83" d="M15.5 8.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z"/>
      </svg>
    )
  };

  // Orbital structure with different radiuses
  const orbitLayers = [
    {
      radius: 120,
      speed: 20,
      skills: [
        { name: 'HTML5', key: 'html5', color: '#E34F26' },
        { name: 'CSS3', key: 'css3', color: '#1572B6' },
        { name: 'JavaScript', key: 'javascript', color: '#F7DF1E' },
      ]
    },
    {
      radius: 180,
      speed: 15,
      skills: [
        { name: 'React', key: 'react', color: '#61DAFB' },
        { name: 'Vue.js', key: 'vue', color: '#4FC08D' },
        { name: 'Tailwind', key: 'tailwind', color: '#06B6D4' },
      ]
    },
    {
      radius: 240,
      speed: 10,
      skills: [
        { name: 'Node.js', key: 'nodejs', color: '#339933' },
        { name: 'MongoDB', key: 'mongodb', color: '#47A248' },
        { name: 'Figma', key: 'figma', color: '#F24E1E' },
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      {/* Central Hub */}
      <div className="flex justify-center items-center mb-16">
        <div className="relative w-96 h-96 mx-auto">
          {/* Central Core */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 ${
            isDark ? 'bg-gray-800 border-cyan-400' : 'bg-white border-blue-500'
          } flex items-center justify-center shadow-2xl z-10 pulse-glow`}>
            <div className="text-2xl font-bold gradient-text">⚡</div>
          </div>

          {/* Orbital Rings */}
          {orbitLayers.map((orbit, orbitIndex) => (
            <div
              key={orbitIndex}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-opacity-30"
              style={{
                width: `${orbit.radius * 2}px`,
                height: `${orbit.radius * 2}px`,
                borderColor: isDark ? '#374151' : '#E5E7EB',
                animation: `spin-slow ${orbit.speed}s linear infinite`
              }}
            >
              {/* Skills on this orbit */}
              {orbit.skills.map((skill, skillIndex) => {
                const angle = (skillIndex * 360) / orbit.skills.length;
                const x = Math.cos((angle * Math.PI) / 180) * orbit.radius;
                const y = Math.sin((angle * Math.PI) / 180) * orbit.radius;
                
                return (
                  <div
                    key={skill.key}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: `${orbit.radius + x}px`,
                      top: `${orbit.radius + y}px`,
                      animation: `spin-reverse ${orbit.speed}s linear infinite`
                    }}
                    onMouseEnter={() => setActiveOrbit(orbitIndex)}
                  >
                    <Card className={`w-20 h-20 hover:w-24 hover:h-24 transition-all duration-300 ${
                      isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'
                    } border-2 hover:border-cyan-400 hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 glow-effect group-hover:animate-bounce`}>
                      <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                        <div className="mb-1 group-hover:animate-pulse" style={{ color: skill.color }}>
                          {techIcons[skill.key as keyof typeof techIcons]}
                        </div>
                        <span className={`text-xs font-semibold text-center ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        } group-hover:text-cyan-400 transition-colors`}>
                          {skill.name}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {orbitLayers.map((orbit, index) => (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 w-0.5 origin-bottom transition-all duration-1000 ${
                  activeOrbit === index ? 'opacity-100' : 'opacity-20'
                }`}
                style={{
                  height: `${orbit.radius}px`,
                  background: `linear-gradient(to top, ${isDark ? '#06b6d4' : '#3b82f6'}, transparent)`,
                  transform: 'translate(-50%, -100%)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Orbit Legend */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {orbitLayers.map((orbit, index) => (
          <Card
            key={index}
            className={`p-6 text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            } ${activeOrbit === index ? 'ring-2 ring-cyan-400 shadow-xl' : ''} hover:shadow-2xl transform hover:-translate-y-2`}
            onMouseEnter={() => setActiveOrbit(index)}
          >
            <h3 className={`text-lg font-bold mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            } ${activeOrbit === index ? 'text-cyan-400' : ''}`}>
              {index === 0 ? 'Core Technologies' : index === 1 ? 'Frameworks' : 'Tools & Backend'}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {orbit.skills.map((skill) => (
                <span
                  key={skill.key}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  } hover:bg-cyan-400 hover:text-white transition-colors`}
                  style={{ borderColor: skill.color }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-500'
            } opacity-30 animate-float-particle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsOrbit;
