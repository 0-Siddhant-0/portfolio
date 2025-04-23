// components/AboutSection.jsx
import React from 'react';
import { Mail, Github, Linkedin, FileDown, Code, Music, Film, Coffee } from 'lucide-react';
import profileImg from '../assets/me.jpg';
import resumePDF from '../assets/siddhant_chaurasia_resume.pdf';

const AboutSection = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Siddhant_Chaurasia_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4 border-t border-purple-400/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[32px] font-bold tracking-[0.2em] text-purple-400 mb-12"
            style={{ fontFamily: "'VT323', monospace" }}>
          About Me
          <span className="block w-24 h-0.5 bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-400 mt-2"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-[22px] leading-relaxed animate-fadeIn" 
               style={{ fontFamily: "'VT323', monospace" }}>
              I'm an <span className="text-teal-400">Electrical and Computer Engineer</span> with expertise in 
              embedded systems, signal processing, and machine learning—<span className="text-teal-500">a true tech polyglot</span>. 
              I thrive on solving complex engineering challenges and developing efficient, practical solutions. My experience ranges 
              from <span className="text-teal-400">designing embedded systems</span> and 
              <span className="text-indigo-400"> implementing advanced signal processing algorithms</span> to 
              <span className="text-sky-400"> applying machine learning techniques</span> and developing software solutions, 
              always aiming for robust and innovative outcomes that meet diverse engineering challenges.
            </p>
            
            <p className="text-[22px] leading-relaxed animate-fadeIn delay-200" 
               style={{ fontFamily: "'VT323', monospace" }}>
              Having recently completed my <span className="text-indigo-500">master's degree at Binghamton University</span>, 
              I'm eager to apply my skills to real-world challenges. I believe in developing technology that not only solves 
              concrete problems but also opens doors to new possibilities. I'm particularly drawn to projects where I can combine 
              my hardware and software expertise to create <span className="text-teal-400">impactful solutions</span>.
            </p>

            <div className="bg-black/20 p-6 rounded-lg border border-purple-400/20 
                          backdrop-blur-sm hover:border-purple-400/30 transition-all duration-500
                          animate-fadeIn delay-300">
              <h3 className="text-[22px] font-bold mb-4 text-teal-500" 
                  style={{ fontFamily: "'VT323', monospace" }}>
                In my free time, I enjoy...
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Music, text: "Music", color: "text-indigo-400" },
                  { icon: Film, text: "Shows/Movies", color: "text-sky-400" },
                  { icon: Coffee, text: "Coffee", color: "text-teal-500" },
                  { icon: Code, text: "Side Projects", color: "text-teal-400" }
                ].map((item, index) => (
                  <div key={index} 
                       className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className={`text-[20px] ${item.color}`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 animate-fadeIn delay-400">
              <button
                onClick={downloadResume}
                className="group flex items-center gap-2 px-6 py-2.5 
                         border border-teal-400 rounded-md text-teal-400 text-[20px]
                         hover:bg-teal-400/10 transition-all duration-300"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
              
              <div className="flex space-x-6 mt-4 sm:mt-0">
                {[
                  { icon: Mail, href: "mailto:schaurasia@binghamton.edu", color: "text-indigo-400" },
                  { icon: Github, href: "https://github.com/0-Siddhant-0", color: "text-purple-400" },
                  { icon: Linkedin, href: "https://linkedin.com/in/siddchau27", color: "text-sky-400" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`${item.color} hover:scale-110 transition-all duration-300`}
                    aria-label={item.icon.name}
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative max-w-md mx-auto animate-fadeIn delay-500">
            <div className="rounded-full overflow-hidden border-4 border-purple-400/30">
              <img
                src={profileImg}
                alt="Siddhant Chaurasia"
                className="w-full aspect-square object-cover object-top transform 
                         hover:scale-[1.02] transition-transform duration-500"
                style={{ objectPosition: '50% 30%' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }

        .border-gradient-to-r {
          border-image: linear-gradient(to right, rgb(168, 85, 247), rgb(99, 102, 241), rgb(34, 211, 238)) 1;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
