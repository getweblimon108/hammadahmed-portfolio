
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Instagram, MessageCircle, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDark: boolean;
}

const Contact = ({ isDark }: ContactProps) => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/getweblimon108/",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/hammadahmed-ahmed-b32117372/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/hammadahmed4526/",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61577936158112",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/923217026152",
      label: "WhatsApp",
      color: "hover:text-green-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_mjhf7pm',
        'template_zx9jn1d',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Hammad Ahmed',
        },
        't2oikxLe40eKXPUJ6'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let's Work Together
            </h3>
            <p className={`mb-8 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300 hover-lift">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
                <a 
                  href="mailto:hammadahmedportfolio@gmail.com"
                  className={`${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover:text-cyan-400 transition-colors`}
                >
                  hammadahmedportfolio@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300 hover-lift">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
                <a 
                  href="https://wa.me/923217026152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover:text-cyan-400 transition-colors`}
                >
                  +92 321 7026152
                </a>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className={`hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-125 transition-all duration-300 hover:-translate-y-1 ${social.color} animate-fade-in hover-lift pulse-glow`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div className={`p-8 rounded-lg shadow-lg animate-fade-in delay-300 hover-lift ${isDark ? 'bg-gray-700' : 'bg-white'} hover:shadow-2xl transition-all duration-300 glow-cyan pulse-glow`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="group">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *"
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="group">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email *"
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="group">
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject *"
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="group">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  rows={4}
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105 resize-none"
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300 hover:shadow-2xl glow-cyan hover-lift"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
