// components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
// Import your images
import programmingIcon from '../assets/icons/programming.png';
import signalIcon from '../assets/icons/signal.png';
import embeddedIcon from '../assets/icons/embedded.png';
import fpgaIcon from '../assets/icons/fpga.png';
import mlIcon from '../assets/icons/machineL.png';
import hsIcon from '../assets/icons/hs.png';
import mathIcon from '../assets/icons/math.png';

const HeroSection = () => {
  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: 'Programming',
      icon: programmingIcon,
      level: 90,
      detail: 'C/C++, Python, VHDL/Verilog, MATLAB'
    },
    {
      name: 'Signal Processing',
      icon: signalIcon,
      level: 85,
      detail: 'DSP, Digital Filters, FFT, Transforms'
    },
    {
      name: 'Embedded Systems',
      icon: embeddedIcon,
      level: 82,
      detail: 'Microcontrollers, RTOS, IoT Integration'
    },
    {
      name: 'Machine Learning',
      icon: mlIcon,
      level: 90,
      detail: 'TensorFlow, PyTorch, TinyML, Edge AI'
    },
    {
      name: 'FPGA Design & Development',
      icon: fpgaIcon,
      level: 75,
      detail: 'Xilinx, Intel Quartus, High-Level Synthesis'
    },
    {
      name: 'Hardware-Software Interfacing',
      icon: hsIcon,
      level: 78,
      detail: 'SPI, I2C, UART, JTAG, Protocol Debugging'
    },
    {
      name: 'Mathematics & Optimization',
      icon: mathIcon,
      level: 92,
      detail: 'Linear Algebra, Calculus, Statistics, Probability'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderSkillCard = (skill, index, isSecondRow = false) => {
    const actualIndex = isSecondRow ? index + 4 : index;
    return (
      <div
        key={skill.name}
        onMouseEnter={() => setHighlightedSkill(actualIndex)}
        onMouseLeave={() => setHighlightedSkill(null)}
        className={`group relative bg-[#222222]/80 p-5 rounded border
          transition-all duration-300 hover:scale-[1.02]
          ${isSecondRow ? 'w-[calc(25%-1rem)]' : ''}
          ${highlightedSkill === actualIndex ? 
            'border-violet-500/50 shadow-lg' : 
            'border-gray-800'}`}
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src={skill.icon}
              alt={skill.name}
              className={`w-10 h-10 object-contain transition-all duration-300 ${
                highlightedSkill === actualIndex ? 'opacity-100' : 'opacity-70'
              }`}
            />
          </div>
          <div className="space-y-1">
            <div className="text-[16px] tracking-wider font-bold text-gray-200">
              {skill.name}
            </div>
            <div className="text-[14px] text-gray-400 h-8 leading-4">
              {skill.detail}
            </div>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-16">
      <div className={`z-10 text-center space-y-12 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="relative space-y-6">
          <h1 className="text-[48px] md:text-7xl font-bold tracking-wide text-amber-100"
              style={{ 
                fontFamily: "'VT323', monospace",
                textShadow: '0 0 10px rgba(255, 248, 197, 0.3), 2px 2px 0px #4a4a4a'
              }}>
            Siddhant Chaurasia
          </h1>
          <p className="text-[28px] tracking-widest font-light text-cyan-400"
             style={{ 
               fontFamily: "'VT323', monospace",
               textShadow: '0 0 10px rgba(255, 236, 97, 0.3)' 
             }}>
            Electrical and Computer Engineer
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          {/* First Row */}
          <div className="grid grid-cols-4 gap-5 mb-5">
            {skills.slice(0, 4).map((skill, index) => renderSkillCard(skill, index))}
          </div>

          {/* Second Row - Perfectly Centered */}
          <div className="flex justify-center gap-5">
            {skills.slice(4).map((skill, index) => renderSkillCard(skill, index, true))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full flex justify-center">
        <ChevronDown className="w-8 h-8 text-violet-400/50 animate-bounce cursor-pointer hover:text-violet-400 transition-colors duration-300" />
      </div>
    </section>
  );
};

export default HeroSection;