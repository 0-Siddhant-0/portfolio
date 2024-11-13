// data/projects.js
const projects = [
  {
    title: 'FPGA-Based Matrix Multiplier for AI Acceleration',
    date: 'Jun 2024 - Sep 2024',
    association: null,
    description: [
      'Built and fine-tuned an 4x4 matrix multiplier on a Basys 3 FPGA for AI workloads, achieving real-time performance through UART-based input/output.',
      'Reduced computation latency and optimized FPGA resource usage, successfully synthesizing and simulating the design in Vivado.'
    ],
    skills: ['Verilog', 'Xilinx Vivado', 'Embedded Systems']
  },
  {
    title: 'AI vs. Human Text Classifier (LLM Project)',
    date: 'Oct 2023 - Dec 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Built a transformer-based NLP model in PyTorch, achieving 95% accuracy in distinguishing AI-generated from human-written text.',
      'Enhanced performance by leveraging BERT tokenization and fine-tuning hyper-parameters through grid search.'
    ],
    skills: ['Python', 'Kaggle', 'Transformer Models', 'Neural Networks', 'BERT']
  },
  {
    title: 'DFT Application in Jamming Signal Detection',
    date: 'Oct 2023 - Dec 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Developed and applied Discrete Fourier Transform(DFT) techniques to enhance signal detection in environments with jamming scenarios, where the signal is dominated by sinusoidal and white Gaussian noise.',
      'Used MATLAB to simulate jamming scenarios, implemented bandpass sampling to create the signal without aliasing, and performed DFT analysis to identify the true signal amidst the jamming, effectively increasing signal clarity and reducing the signal-to-noise ratio (SNR).'
    ],
    skills: ['MATLAB', 'Bandpass Signal Sampling', 'DFT', 'Filter Design']
  },
  {
    title: 'Synergy Between Doppler Shift and Angle-of-Arrival(AoA) based emitter localization',
    date: 'May 2023 - Jul 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Formulated the signal model, derived the Cramer-Rao Lower Bound (CRLB), and simulated data for a scenario where an aircraft estimates the location of an emitter using a combination of Doppler Shift and Angle-of-Arrival (AoA) measurements.',
      'Created MATLAB simulations and implemented the Least Squares estimator, demonstrating the potential for improved accuracy in signal detection when using more than one measurement'
    ],
    skills: ['Parameter Estimation', 'MATLAB', 'Digital Signal Processing', 'Statistical Signal Processing']
  },
  {
    title: 'Image Complexity and Visual Aesthetics Analysis',
    date: 'Mar 2023 - Apr 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Carried out an evaluation of image complexity and aesthetics on 1,500 images from the AVA dataset using information theory based on statistical measurements like entropy, mutual information, edges, etc., to determine the correlation between image complexity and aesthetics'
    ],
    skills: ['Python', 'Information Theory', 'Data Analysis']
  },
  {
    title: 'Real-Time DSP for Noise Suppression',
    date: 'Aug 2022 - Oct 2022',
    association: 'Manipal University Jaipur',
    description: [
      'Designed and implemented a real-time noise suppression algorithm using adaptive filtering (LMS) on an ESP32 microcontroller, reducing background noise in voice recordings by 10-15 dB.',
      'Validated performance through MATLAB simulations and real-time testing, demonstrating improved voice clarity.'
    ],
    skills: ['C++', 'MATLAB', 'DSP', 'Embedded']
  },
  {
    title: 'Development of a Quadrupedal Robot: Zeke',
    date: 'Mar 2021 - May 2021',
    association: 'Manipal University Jaipur',
    description: [
      'Developed a 12-servo quadrupedal robot (mini spot) using 3D printed parts, which is controlled by an ESP32 microcontroller.',
      'Programmed the robot to achieve stable movements and improved mobility through iterative testing and refinement'
    ],
    skills: ['C++', '3D Printing', 'Arduino IDE', 'Soldering']
  }
];

export default projects;