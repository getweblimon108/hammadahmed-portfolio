
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificatesSection = ({ isDark }: { isDark: boolean }) => {
  const [currentHPCert, setCurrentHPCert] = useState(0);

  const hpCertificates = [
    {
      id: 1,
      image: "https://i.postimg.cc/7LqVpKd9/certificate-1.png",
      title: "HP LIFE Certificate 1",
      description: "Professional development certification"
    },
    {
      id: 2,
      image: "https://i.postimg.cc/WzSFq7XN/certificate-2.png",
      title: "HP LIFE Certificate 2",
      description: "Advanced skills certification"
    },
    {
      id: 3,
      image: "https://i.postimg.cc/cLfWDJGY/certificate-3.png",
      title: "HP LIFE Certificate 3",
      description: "Technical excellence certification"
    },
    {
      id: 4,
      image: "https://i.postimg.cc/ZRxFjpVg/certificate-5.png",
      title: "HP LIFE Certificate 4", 
      description: "Leadership and innovation certification"
    },
    {
      id: 5,
      image: "https://i.postimg.cc/sXLfk06Z/certificate.png",
      title: "HP LIFE Certificate 5",
      description: "Comprehensive skill development certification"
    }
  ];

  const saylaniCertificate = {
    image: "https://i.postimg.cc/GphFnyBY/Chat-GPT-Image-Jul-1-2025-11-25-48-AM.png",
    title: "Saylani Web Development Certificate",
    description: "Comprehensive web development certification awarded by Saylani Welfare, 2025"
  };

  const nextHPCert = () => {
    setCurrentHPCert((prev) => (prev + 1) % hpCertificates.length);
  };

  const prevHPCert = () => {
    setCurrentHPCert((prev) => (prev - 1 + hpCertificates.length) % hpCertificates.length);
  };

  return (
    <div className="space-y-16">
      {/* Main Certificates Section */}
      <div className="text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 animate-fade-in gradient-text ${isDark ? 'text-white' : 'text-gray-900'}`}>
          📜 Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* HP LIFE Certificates Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className={`cursor-pointer transition-all duration-500 hover:scale-105 transform group animate-fade-in hover-lift ${
                isDark ? 'bg-gray-800/90 border-gray-600 hover:border-cyan-400/70 hover:bg-gray-700/80' : 'bg-white/90 hover:border-blue-500/70 hover:bg-blue-50/30'
              } hover:shadow-2xl p-8 text-center backdrop-blur-sm glow-cyan pulse-glow`}>
                <CardContent className="p-0">
                  <div className="text-6xl mb-4 group-hover:animate-bounce group-hover:scale-125 transition-all duration-300">🎓</div>
                  <h3 className={`text-xl font-bold mb-2 group-hover:scale-110 transition-all duration-300 ${
                    isDark ? 'text-cyan-300 group-hover:text-cyan-100' : 'text-blue-600 group-hover:text-blue-800'
                  }`}>
                    HP LIFE Certifications
                  </h3>
                  <p className={`mb-4 transition-all duration-300 group-hover:scale-105 ${
                    isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    View collection of 5 professional certificates
                  </p>
                  <Badge className={`animate-pulse group-hover:animate-bounce transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 border-cyan-400/50' 
                      : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 border-blue-500/50'
                  }`}>
                    Click to View Gallery
                  </Badge>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className={`max-w-4xl animate-scale-in ${isDark ? 'bg-gray-800/95 border-gray-600 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'}`}>
              <DialogHeader>
                <DialogTitle className={`text-xl text-center animate-fade-in gradient-text ${
                  isDark ? 'text-cyan-300' : 'text-blue-600'
                }`}>
                  HP LIFE Certifications Gallery
                </DialogTitle>
              </DialogHeader>
              <div className="relative animate-fade-in">
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevHPCert}
                    className={`hover:scale-110 transition-all duration-300 ${
                      isDark 
                        ? 'hover:bg-cyan-400/20 hover:border-cyan-400 border-gray-600' 
                        : 'hover:bg-blue-500/20 hover:border-blue-500'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex-1 max-w-2xl">
                    <div className="relative group">
                      <img
                        src={hpCertificates[currentHPCert].image}
                        alt={hpCertificates[currentHPCert].title}
                        className="w-full rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 hover-lift"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center mt-4 animate-fade-in">
                      <h4 className={`font-bold text-lg mb-2 ${
                        isDark ? 'text-cyan-300' : 'text-blue-600'
                      }`}>
                        {hpCertificates[currentHPCert].title}
                      </h4>
                      <p className={`text-base ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {hpCertificates[currentHPCert].description}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextHPCert}
                    className={`hover:scale-110 transition-all duration-300 ${
                      isDark 
                        ? 'hover:bg-cyan-400/20 hover:border-cyan-400 border-gray-600' 
                        : 'hover:bg-blue-500/20 hover:border-blue-500'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex justify-center space-x-2 mt-4">
                  {hpCertificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHPCert(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === currentHPCert 
                          ? isDark 
                            ? 'bg-cyan-400 w-8 shadow-lg shadow-cyan-400/50' 
                            : 'bg-blue-500 w-8 shadow-lg shadow-blue-500/50'
                          : isDark 
                            ? 'bg-gray-500 hover:bg-gray-400' 
                            : 'bg-gray-400 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Saylani Certificate Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className={`cursor-pointer transition-all duration-500 hover:scale-105 transform group animate-fade-in hover-lift ${
                isDark ? 'bg-gray-800/90 border-gray-600 hover:border-cyan-400/70 hover:bg-gray-700/80' : 'bg-white/90 hover:border-blue-500/70 hover:bg-blue-50/30'
              } hover:shadow-2xl p-8 text-center backdrop-blur-sm glow-cyan pulse-glow`}>
                <CardContent className="p-0">
                  <div className="text-6xl mb-4 group-hover:animate-bounce group-hover:scale-125 transition-all duration-300">🎖️</div>
                  <h3 className={`text-xl font-bold mb-2 group-hover:scale-110 transition-all duration-300 ${
                    isDark ? 'text-cyan-300 group-hover:text-cyan-100' : 'text-blue-600 group-hover:text-blue-800'
                  }`}>
                    Saylani Web Development
                  </h3>
                  <p className={`mb-4 transition-all duration-300 group-hover:scale-105 ${
                    isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    Professional web development certification
                  </p>
                  <Badge className={`animate-pulse group-hover:animate-bounce transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 border-cyan-400/50' 
                      : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 border-blue-500/50'
                  }`}>
                    Click to View Certificate
                  </Badge>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className={`max-w-3xl animate-scale-in ${isDark ? 'bg-gray-800/95 border-gray-600 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'}`}>
              <DialogHeader>
                <DialogTitle className={`text-xl text-center animate-fade-in gradient-text ${
                  isDark ? 'text-cyan-300' : 'text-blue-600'
                }`}>
                  🎖️ Saylani Web Development Certificate
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 animate-fade-in">
                <div className="relative group">
                  <img
                    src={saylaniCertificate.image}
                    alt={saylaniCertificate.title}
                    className="w-full rounded-lg shadow-2xl hover:scale-105 transition-all duration-500 hover-lift"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-medium ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {saylaniCertificate.description}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
