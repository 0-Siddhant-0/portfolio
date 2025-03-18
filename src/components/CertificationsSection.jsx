// components/CertificationsSection.jsx
import React from 'react';
import certifications from '../data/certifications';
import { ExternalLink, Lock } from 'lucide-react';

import armLogo from '../assets/arm.png';
import courseraCLogo from '../assets/clogo.jpeg';
import mavenSiliconLogo from '../assets/mslogo.jpeg';

import armCertificate from '../assets/certificate.pdf';
import courseraCertificate from '../assets/Coursera EJ5RU4P65BZ9.pdf';
import vlsiCertificate from '../assets/VLSICourseCertificate.pdf';


const assetMap = {
  '/assets/arm.png': armLogo,
  '/assets/clogo.jpeg': courseraCLogo,
  '/assets/mslogo.jpeg': mavenSiliconLogo,
  '/assets/certificate.pdf': armCertificate,
  '/assets/Coursera EJ5RU4P65BZ9.pdf': courseraCertificate,
  '/assets/VLSICourseCertificate.pdf': vlsiCertificate
};


const getAsset = (path) => {
  return assetMap[path] || path;
};

const CertificationCard = ({ cert }) => {
  return (
    <div 
      className="flex flex-col md:flex-row gap-8 bg-[#1a1a2e]/90 rounded-lg overflow-hidden
                border border-[#20B2AA]/20 hover:border-[#20B2AA]/40 transition-all duration-300
                backdrop-blur-sm shadow-xl group"
    >
      {/* Certificate Details */}
      <div className="flex-1 p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2
                         shadow-[0_0_15px_rgba(32,178,170,0.15)]">
            <img 
              src={getAsset(cert.logo)} 
              alt={`${cert.issuer} Logo`} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[22px] font-bold mb-2 text-[#7FFFD4] leading-tight">
              {cert.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#98FB98]">{cert.issuer}</span>
              <span className="w-1 h-1 bg-[#20B2AA]/50 rounded-full"></span>
              <span className="text-[#87CEEB]">{cert.date}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <div className="text-[16px] text-[#FF69B4] mb-1 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Credential ID
            </div>
            <div className="font-mono text-[#F0E68C] bg-[#20B2AA]/5 px-4 py-2 rounded-lg 
                          border border-[#20B2AA]/10 shadow-inner">
              {cert.credentialId}
            </div>
          </div>

          <div>
            <div className="text-[16px] text-[#DDA0DD] mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-[16px] bg-[#4169E1]/10 text-[#87CEEB] 
                           rounded-full border border-[#4169E1]/20 
                           hover:border-[#4169E1]/40 transition-all duration-300
                           hover:shadow-[0_0_10px_rgba(65,105,225,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="relative w-full md:w-96 bg-[#1a1a2e] border-l border-[#20B2AA]/20
                    group-hover:border-[#20B2AA]/40 transition-all duration-300">
        {/* PDF Preview */}
        <div className="p-0">
          <iframe
            src={getAsset(cert.certificateFile) + '#toolbar=0&navpanes=0&scrollbar=0'}
            title="Certificate"
            className="w-full h-full"
            style={{
              height: '300px',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* View Certificate Button */}
        <div className="mt-6 flex justify-center">
          <a
            href={getAsset(cert.certificateFile)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 
                       bg-[#4169E1]/10 text-[#87CEEB] rounded-lg border border-[#4169E1]/20
                       hover:border-[#4169E1]/40 hover:shadow-[0_0_15px_rgba(65,105,225,0.15)]
                       transition-all duration-300 group/button"
          >
            <ExternalLink className="w-4 h-4 group-hover/button:scale-110 transition-transform" />
            <span>View Certificate</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold tracking-[0.2em] text-[#E6E6FA] 
                        border-b-2 border-[#DDA0DD] pb-4 inline-block">
            Certifications
          </h2>
        </div>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
