// data/projects.js
import zekeImage from '../assets/zeke.png';
//est
import estimateProj3 from '../assets/estimate_proj/3.jpg';
import estimateProj9 from '../assets/estimate_proj/9.jpg';
import estimateProjComp from '../assets/estimate_proj/comp.png';
//dsp
import segAvgImg from '../assets/dsp/seg_avg.png';
import trueJamSigImg from '../assets/dsp/true_and_jam_sig.png';
import winWoImg from '../assets/dsp/win_wo.png';
// NLP project assets
import nlpArchitecture from '../assets/nlp/architecture.png';
import nlpWordCloud from '../assets/nlp/word_cloud_from_dataset.png';
import nlpTransformerFlow from '../assets/nlp/transformer_detection_flow.gif';
// Diffusion project assets
import diffModelImg from '../assets/diffusion_proj/diff_mod.png';
import forwardProcessGif from '../assets/diffusion_proj/forward_process.gif';
import finalComparisonImg from '../assets/diffusion_proj/final_comparison.png';
import reverseProcessGif from '../assets/diffusion_proj/reverse_process_denoising.gif';
// Combining forward and reverse process GIFs for side-by-side display
import { createSideBySideGif } from '../utils/imageUtils';

const projects = [
  {
    title: 'Generative Denoising for Medical Image Reconstruction',
    date: 'March 2025 - April 2025',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Developed and trained a conditional score-based diffusion model (VP-SDE with U-Net/Attention) in PyTorch to reconstruct clean medical CT patches from noisy inputs (σn = 0.3) using the OrganAMNIST dataset.',
      'Achieved a +2.44 dB PSNR improvement by utilizing a combined loss function (MSE + frequency-domain L1), effectively removing noise while preserving anatomical details in the reconstructed images.'
    ],
    skills: ['Python', 'PyTorch', 'Diffusion Models', 'Image Processing', 'U-Net', 'Deep Learning', 'Medical Imaging'],
    githubLink: 'https://github.com/0-Siddhant-0/generative-denoising-sde-diffusion',
    diagramLink: null,
    documentationLink: null,
    imageAsset: null,
    customLayout: createSideBySideGif(
      forwardProcessGif, 
      reverseProcessGif, 
      diffModelImg, 
      finalComparisonImg
    ),
    imageAssets: null
  },
  {
    title: 'FPGA-Based Matrix Multiplier for AI Acceleration',
    date: 'Jun 2024 - Sep 2024',
    association: null,
    description: [
      'Built and fine-tuned an 4x4 matrix multiplier on a Basys 3 FPGA for AI workloads, achieving real-time performance through UART-based input/output.',
      'Reduced computation latency and optimized FPGA resource usage, successfully synthesizing and simulating the design in Vivado.'
    ],
    skills: ['Verilog', 'Xilinx Vivado', 'Embedded Systems'],
    githubLink: null, 
    diagramLink: null, 
    documentationLink: null, 
    imageAsset: null 
  },
  {
    title: 'AI vs. Human Text Classifier (LLM Project)',
    date: 'Oct 2023 - Dec 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Built a transformer-based NLP model in PyTorch, achieving 95% accuracy in distinguishing AI-generated from human-written text.',
      'Enhanced performance by leveraging BERT tokenization and fine-tuning hyper-parameters through grid search.'
    ],
    skills: ['Python', 'PyTorch', 'Transformer Models', 'NLP', 'BERT', 'Kaggle'],
    githubLink: 'https://github.com/0-Siddhant-0/AI-vs-Human-text-classifier',
    diagramLink: null,
    documentationLink: null,
    imageAsset: null,
    imageAssets: [nlpTransformerFlow, nlpArchitecture, nlpWordCloud]
  },
  {
    title: 'DFT Application in Jamming Signal Detection',
    date: 'Oct 2023 - Dec 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Developed and applied Discrete Fourier Transform(DFT) techniques to enhance signal detection in environments with jamming scenarios, where the signal is dominated by sinusoidal and white Gaussian noise.',
      'Used MATLAB to simulate jamming scenarios, implemented bandpass sampling to create the signal without aliasing, and performed DFT analysis to identify the true signal amidst the jamming, effectively increasing signal clarity and reducing the signal-to-noise ratio (SNR).'
    ],
    skills: ['MATLAB', 'Digital Signal Processing', 'DFT', 'Spectral Analysis', 'Signal Detection', 'Windowing Techniques'],
    githubLink: 'https://github.com/0-Siddhant-0/signal-jamming-detection/tree/main',
    diagramLink: null,
    documentationLink: null,
    imageAsset: null,
    imageAssets: [winWoImg, trueJamSigImg, segAvgImg]
  },
  {
    title: 'Synergy Between Doppler Shift and Angle-of-Arrival(AoA) based emitter localization',
    date: 'May 2023 - Jul 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Formulated the signal model, derived the Cramer-Rao Lower Bound (CRLB), and simulated data for a scenario where an aircraft estimates the location of an emitter using a combination of Doppler Shift and Angle-of-Arrival (AoA) measurements.',
      'Created MATLAB simulations and implemented the Least Squares estimator, demonstrating the potential for improved accuracy in signal detection when using more than one measurement'
    ],
    skills: ['Parameter Estimation', 'MATLAB', 'Digital Signal Processing', 'Statistical Signal Processing'],
    githubLink: 'https://github.com/0-Siddhant-0/Doppler-AoA-Emitter-Location',
    diagramLink: null,
    documentationLink: null,
    imageAsset: null,
    imageAssets: [estimateProj3, estimateProjComp, estimateProj9]
  },
  {
    title: 'Image Complexity and Visual Aesthetics Analysis',
    date: 'Mar 2023 - Apr 2023',
    association: 'Thomas J. Watson College of Engineering and Applied Science, Binghamton University',
    description: [
      'Carried out an evaluation of image complexity and aesthetics on 1,500 images from the AVA dataset using information theory based on statistical measurements like entropy, mutual information, edges, etc., to determine the correlation between image complexity and aesthetics'
    ],
    skills: ['Python', 'Information Theory', 'Data Analysis'],
    githubLink: null,
    diagramLink: null,
    documentationLink: null,
    imageAsset: null
  },
  {
    title: 'Real-Time DSP for Noise Suppression',
    date: 'Aug 2022 - Oct 2022',
    association: 'Manipal University Jaipur',
    description: [
      'Designed and implemented a real-time noise suppression algorithm using adaptive filtering (LMS) on an ESP32 microcontroller, reducing background noise in voice recordings by 8-10 dB.',
      'Validated performance through MATLAB simulations and real-time testing, demonstrating improved voice clarity.'
    ],
    skills: ['C++', 'MATLAB', 'DSP', 'Embedded'],
    githubLink: null,
    diagramLink: null,
    documentationLink: null,
    imageAsset: null
  },
  {
    title: 'Development of a Quadrupedal Robot: Zeke',
    date: 'Mar 2021 - May 2021',
    association: 'Manipal University Jaipur',
    description: [
      'Developed a 12-servo quadrupedal robot (mini spot) using 3D printed parts, which is controlled by an ESP32 microcontroller.',
      'Programmed the robot to achieve stable movements and improved mobility through iterative testing and refinement'
    ],
    skills: ['C++', '3D Printing', 'Arduino IDE', 'Soldering'],
    githubLink: 'https://github.com/0-Siddhant-0/esp32-robot-dog-code',
    diagramLink: null, 
    documentationLink: null, 
    imageAsset: zekeImage,
    imageAssets: null
  }
];

export default projects;