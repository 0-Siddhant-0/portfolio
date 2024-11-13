import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Wrench, Terminal } from 'lucide-react';

// Import logos for Programming Languages
import cppLogo from '../assets/logo/cpp.png';
import pythonLogo from '../assets/logo/python.png';
import matlabLogo from '../assets/logo/matlab.png';
import verilogLogo from '../assets/logo/verilog.png';
import assemblyLogo from '../assets/logo/assembly.png';
import javascriptLogo from '../assets/logo/javascript.png';
import rLogo from '../assets/logo/r.png';

// Import logos for Frameworks & Libraries
import pytorchLogo from '../assets/logo/pytorch.png';
import tensorflowLogo from '../assets/logo/tensorflow.png';
import sklearnLogo from '../assets/logo/sklearn.png';
import freertosLogo from '../assets/logo/freertos.png';
import linuxLogo from '../assets/logo/linux.png';
import hadoopLogo from '../assets/logo/hadoop.png';

// Import logos for Tools & Instrumentation
import spiceLogo from '../assets/logo/spice.png';
import ansysLogo from '../assets/logo/ansys.png';
import autocadLogo from '../assets/logo/autocad.png';
import simulinkLogo from '../assets/logo/simulink.png';
import vivadoLogo from '../assets/logo/vivado.png';
import altiumLogo from '../assets/logo/altium.png';

// Import logos for Hardware & Design
import circuitLogo from '../assets/logo/circuit.png';
import pcbLogo from '../assets/logo/pcb.png';
import dspLogo from '../assets/logo/dsp.png';
import hardwareLogo from '../assets/logo/hardware.png';
import jtagLogo from '../assets/logo/jtag.png';
import scopeLogo from '../assets/logo/scope.png';

const SkillsSection = () => {
  const categories = [
    {
      name: 'Programming Languages',
      icon: Code,
      color: 'from-cyan-500 to-teal-500',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-400/20',
      skills: [
        { name: 'C/C++', logo: cppLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'MATLAB', logo: matlabLogo },
        { name: 'Verilog', logo: verilogLogo },
        { name: 'Assembly', logo: assemblyLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'R', logo: rLogo }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      icon: Terminal,
      color: 'from-rose-500 to-red-500',
      textColor: 'text-rose-400',
      borderColor: 'border-rose-400/20',
      skills: [
        { name: 'PyTorch', logo: pytorchLogo },
        { name: 'TensorFlow', logo: tensorflowLogo },
        { name: 'scikit-learn', logo: sklearnLogo },
        { name: 'FreeRTOS', logo: freertosLogo },
        { name: 'Embedded Linux', logo: linuxLogo },
        { name: 'Hadoop', logo: hadoopLogo }
      ]
    },
    {
      name: 'Tools & Instrumentation',
      icon: Wrench,
      color: 'from-lime-500 to-green-500',
      textColor: 'text-lime-400',
      borderColor: 'border-lime-400/20',
      skills: [
        { name: 'SPICE', logo: spiceLogo },
        { name: 'Ansys HFSS', logo: ansysLogo },
        { name: 'AutoCAD Electrical', logo: autocadLogo },
        { name: 'MATLAB/Simulink', logo: simulinkLogo },
        { name: 'Xilinx Vivado', logo: vivadoLogo },
        { name: 'Altium Designer', logo: altiumLogo }
      ]
    },
    {
      name: 'Hardware & Design',
      icon: Cpu,
      color: 'from-yellow-500 to-amber-500',
      textColor: 'text-yellow-400',
      borderColor: 'border-yellow-400/20',
      skills: [
        { name: 'Circuit Design', logo: circuitLogo },
        { name: 'PCB Design', logo: pcbLogo },
        { name: 'DSP Algorithms', logo: dspLogo },
        { name: 'Hardware Interfaces', logo: hardwareLogo },
        { name: 'JTAG', logo: jtagLogo },
        { name: 'Oscilloscopes', logo: scopeLogo }
      ]
    }
  ];

  // Define the motion variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[40px] font-bold tracking-[0.2em] mb-6 bg-gradient-to-r from-indigo-300 via-blue-400 to-indigo-300 text-transparent bg-clip-text"
              style={{ fontFamily: "'VT323', monospace" }}>
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[20px] md:text-[22px]"
             style={{ fontFamily: "'VT323', monospace" }}>
            A comprehensive overview of my technical expertise in Electrical and Computer Engineering
          </p>
        </div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-black/20 backdrop-blur-sm rounded-xl p-6 
                         border ${category.borderColor} hover:border-opacity-40 
                         transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} 
                                bg-opacity-10`}>
                  <category.icon className={`w-6 h-6 ${category.textColor}`} />
                </div>
                <h3 className={`text-[22px] font-bold ${category.textColor}`}
                    style={{ fontFamily: "'VT323', monospace" }}>
                  {category.name}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="group flex flex-col items-center gap-3 p-4 rounded-lg 
                             bg-black/20 hover:bg-black/30 transition-all duration-300"
                  >
                    <div className="w-24 h-24 rounded-lg bg-black/30 p-4 
                                  group-hover:bg-black/40 transition-all duration-300 
                                  flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-20 h-20 object-contain opacity-80 
                                 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-[18px] md:text-[20px] text-center text-gray-300 
                                   group-hover:text-gray-100 transition-colors font-medium"
                                   style={{ fontFamily: "'VT323', monospace" }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;