import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Copy, Check } from 'lucide-react';

const ContactSection = () => {
  const [copiedField, setCopiedField] = useState(null);
  
  const contactInfo = [
    {
      type: 'Email',
      value: 'siddchaurasia27@gmail.com',
      icon: Mail,
      link: 'mailto:siddchaurasia27@gmail.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'Phone',
      value: '+919106966006',
      icon: Phone,
      link: 'tel:+919106966006',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/siddchau27',
      icon: Linkedin,
      link: 'https://linkedin.com/in/siddchau27',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      type: 'Github',
      value: 'github.com/0-Siddhant-0',
      icon: Github,
      link: 'https://github.com/0-Siddhant-0',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const handleCopy = (value, type) => {
    navigator.clipboard.writeText(value);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 border-t border-indigo-400/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 
                           text-transparent bg-clip-text">
              Let's Connect!
            </span>
          </h2>
          <p className="text-[22px] text-gray-300">Connect to discuss potential opportunities together</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact) => (
            <div key={contact.type} 
                 className="group relative p-6 rounded-xl backdrop-blur-sm 
                          border border-white/10 hover:border-white/20
                          bg-black/30 hover:bg-black/40 
                          transition-all duration-300">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} 
                             opacity-0 group-hover:opacity-10 blur-xl 
                             transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${contact.color}
                                 bg-opacity-10 group-hover:bg-opacity-20 
                                 transition-all duration-300`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[16px] text-gray-400 mb-1">{contact.type}</h3>
                    <p className="text-[20px] font-medium">{contact.value}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleCopy(contact.value, contact.type)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label={`Copy ${contact.type}`}
                  >
                    {copiedField === contact.type ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                    )}
                  </button>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label={`Open ${contact.type}`}
                  >
                    <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 animate-pulse">
            Looking forward to connecting with you! 👋
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;