import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfessionalSkillsProps {
  isDark: boolean;
}

const ProfessionalSkills = ({ isDark }: ProfessionalSkillsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  console.log('ProfessionalSkills component rendered', { isDark });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Skills section intersection:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills-section');
    console.log('Skills section element found:', !!section);
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Wave-like progress animation
  useEffect(() => {
    if (isVisible) {
      const skillCategories = [
        ...frontendSkills,
        ...backendSkills,
        ...uiFrameworks,
        ...toolsPlatforms
      ];
      
      skillCategories.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 150); // Wave-like staggered timing
      });
    }
  }, [isVisible]);

  const frontendSkills = [
    { 
      name: 'React', 
      level: 90, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.015-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.988-1.36-1.56z"/>
        </svg>
      ), 
      color: 'from-cyan-400 to-blue-500' 
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ), 
      color: 'from-yellow-400 to-orange-500' 
    },
    { 
      name: 'HTML5', 
      level: 95, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ), 
      color: 'from-red-400 to-pink-500' 
    },
    { 
      name: 'CSS3', 
      level: 90, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ), 
      color: 'from-blue-400 to-purple-500' 
    },
    { 
      name: 'TypeScript', 
      level: 85, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ), 
      color: 'from-blue-500 to-indigo-600' 
    }
  ];

  const backendSkills = [
    { 
      name: 'Node.js', 
      level: 80, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.946-0.922-1.604V6.921 c0-0.658,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.946,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
        </svg>
      ), 
      color: 'from-green-400 to-emerald-500' 
    },
    { 
      name: 'Express', 
      level: 75, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#000000" d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957c-3.83 2.524-8.635.705-9.685-3.015-.243-.86-.326-1.742-.4-2.602z"/>
        </svg>
      ), 
      color: 'from-gray-400 to-gray-600' 
    },
    { 
      name: 'MongoDB', 
      level: 85, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.724 10.217-.18 4.065 2.778 8.5 5.282 9.596.42.73.727 1.21.727 1.21s.238-.3.727-1.21c2.504-1.096 5.462-5.531 5.282-9.596-.046-1.115-.123-2.273-.463-4.846zm-5.336 13.09s-.727-.68-1.329-1.784c-.527-.823-.951-1.773-1.329-2.754-.36-.938-.649-1.918-.835-2.897-.19-.996-.282-1.997-.282-2.997 0-1.02.091-2.021.282-2.997.186-.98.475-1.959.835-2.897.378-.98.802-1.931 1.329-2.754.602-1.104 1.329-1.784 1.329-1.784s.727.68 1.329 1.784c.527.823.951 1.773 1.329 2.754.36.938.649 1.918.835 2.897.19.996.282 1.997.282 2.997 0 1-.091 2.001-.282 2.997-.186.98-.475 1.959-.835 2.897-.378.98-.802 1.931-1.329 2.754-.602 1.104-1.329 1.784-1.329 1.784z"/>
        </svg>
      ), 
      color: 'from-green-500 to-teal-500' 
    }
  ];

  const uiFrameworks = [
    { 
      name: 'Tailwind CSS', 
      level: 90, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#06B6D4" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ), 
      color: 'from-cyan-400 to-teal-500' 
    },
    { 
      name: 'Bootstrap', 
      level: 85, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#7952B3" d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.584h2.32c1.283 0 2.18-.688 2.18-1.77 0-1.202-.934-1.814-2.362-1.814zM9.956 3.442c-4.994 0-9.044 4.05-9.044 9.044 0 4.994 4.05 9.044 9.044 9.044 4.994 0 9.044-4.05 9.044-9.044 0-4.994-4.05-9.044-9.044-9.044zm2.832 15.436H7.618V5.078h4.968c2.174 0 3.728.12 4.71 1.116.906.906 1.316 2.009 1.316 3.196 0 1.413-.494 2.9-2.09 3.184v.06c2.062.36 2.832 1.509 2.832 3.315 0 3.012-2.18 4.929-5.566 4.929z"/>
        </svg>
      ), 
      color: 'from-purple-400 to-violet-500' 
    }
  ];

  const toolsPlatforms = [
    { 
      name: 'GitHub', 
      level: 88, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#181717" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      color: 'from-gray-700 to-gray-900' 
    },
    { 
      name: 'Vercel', 
      level: 82, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#000000" d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      ), 
      color: 'from-black to-gray-800' 
    }
  ];

  const SkillCategory = ({ 
    title, 
    skills, 
    titleColor,
    delay = 0
  }: { 
    title: string; 
    skills: Array<{ name: string; level: number; icon: React.ReactNode; color: string }>; 
    titleColor: string;
    delay?: number;
  }) => (
    <div 
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      <Card className={`${
        isDark 
          ? 'bg-gray-800/50 border-gray-700/30 hover:bg-gray-800/70' 
          : 'bg-white/50 border-gray-200/30 hover:bg-white/70'
      } backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group relative overflow-hidden`}>
        
        <CardHeader className="pb-4 relative z-10">
          <CardTitle className={`text-xl font-bold ${titleColor} flex items-center gap-3`}>
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {title}
            </span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`space-y-3 transform transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ 
                transitionDelay: `${delay + (index * 100)}ms` 
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="transition-transform duration-300 hover:scale-110">
                    {skill.icon}
                  </div>
                  <span className={`font-semibold ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {skill.name}
                  </span>
                </div>
                <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                  isDark 
                    ? 'text-gray-300 bg-gray-700/50' 
                    : 'text-gray-700 bg-gray-200/50'
                }`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2">
                <div 
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${animatedValues[skill.name] || 0}%`,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
                  }}
                />
                
                {/* Glowing effect */}
                <div 
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${animatedValues[skill.name] || 0}%`,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
                  }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  console.log('Rendering ProfessionalSkills with isVisible:', isVisible);

  return (
    <div id="skills-section" className="w-full space-y-8 py-8">
      {/* Header with wave animation */}
      <div className={`text-center space-y-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h3 className={`text-3xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        } relative`}>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`} style={{ transitionDelay: '500ms' }} />
        </h3>
        <p className={`text-lg max-w-2xl mx-auto ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        } transition-all duration-700`} style={{ transitionDelay: '300ms' }}>
          A comprehensive overview of my technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory
          title="Frontend Development"
          skills={frontendSkills}
          titleColor={isDark ? 'text-blue-400' : 'text-blue-600'}
          delay={200}
        />
        
        <SkillCategory
          title="Backend Development"
          skills={backendSkills}
          titleColor={isDark ? 'text-green-400' : 'text-green-600'}
          delay={400}
        />
        
        <SkillCategory
          title="UI Frameworks & Libraries"
          skills={uiFrameworks}
          titleColor={isDark ? 'text-purple-400' : 'text-purple-600'}
          delay={600}
        />
        
        <SkillCategory
          title="Tools & Platforms"
          skills={toolsPlatforms}
          titleColor={isDark ? 'text-orange-400' : 'text-orange-600'}
          delay={800}
        />
      </div>

      {/* Summary with slide-in animation */}
      <div className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '1000ms' }}>
        <Card className={`${
          isDark 
            ? 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700/30' 
            : 'bg-gradient-to-r from-white/50 to-gray-50/50 border-gray-200/30'
        } backdrop-blur-sm p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] relative overflow-hidden`}>
          
          <div className="relative z-10">
            <h3 className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h3>
            <p className={`text-lg mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about creating modern web applications with cutting-edge technologies
            </p>
            
            <div className="flex justify-center items-center gap-12 text-sm">
              {[
                { value: '4+', label: 'Years Experience', delay: 1200 },
                { value: '50+', label: 'Projects Completed', delay: 1400 },
                { value: '12+', label: 'Technologies', delay: 1600 }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: `${stat.delay}ms` }}
                >
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className={`${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  } font-medium`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
