// utils/FontStandardizer.js
import React from 'react';

// Base font size standards (in pixels)
const fontSizeStandards = {
  h1: 48, // Main headers (was ~32px)
  h2: 40, // Section headers (was ~28px)
  h3: 32, // Sub-section headers (was ~24px)
  h4: 28, // Card headers (was ~20px)
  body: 20, // Regular text (was ~16px)
  small: 16, // Small text (was ~14px)
  tiny: 14  // Very small text (was ~12px)
};

// Font size classes mapping
const fontSizeClasses = {
  // Headers
  'text-[48px]': `text-[${fontSizeStandards.h1}px]`,
  'text-[40px]': `text-[${fontSizeStandards.h2}px]`,
  'text-[36px]': `text-[${Math.round(fontSizeStandards.h2 * 0.9)}px]`,
  'text-[32px]': `text-[${fontSizeStandards.h3}px]`,
  'text-[28px]': `text-[${fontSizeStandards.h4}px]`,
  
  // Body text
  'text-[22px]': `text-[${Math.round(fontSizeStandards.body * 1.1)}px]`,
  'text-[20px]': `text-[${fontSizeStandards.body}px]`,
  'text-[18px]': `text-[${Math.round(fontSizeStandards.body * 0.9)}px]`,
  
  // Small text
  'text-[16px]': `text-[${fontSizeStandards.small}px]`,
  'text-[14px]': `text-[${fontSizeStandards.tiny}px]`,
};

// Font size update utility
const updateFontSizes = (className) => {
  if (!className) return '';
  
  return className.split(' ').map(cls => {
    // If it's a font size class, replace it with our standardized version
    if (fontSizeClasses[cls]) {
      return fontSizeClasses[cls];
    }
    return cls;
  }).join(' ');
};

// HOC to wrap components and standardize their font sizes
export const withStandardFontSize = (WrappedComponent) => {
  return React.forwardRef((props, ref) => {
    const updatedProps = { ...props };
    if (props.className) {
      updatedProps.className = updateFontSizes(props.className);
    }
    return <WrappedComponent {...updatedProps} ref={ref} />;
  });
};

// Custom hook for standardizing font sizes
export const useStandardFontSize = (className) => {
  return updateFontSizes(className);
};

// StyleSheet with standardized text styles
export const standardTextStyles = {
  mainHeader: `text-[${fontSizeStandards.h1}px] font-bold tracking-wide`,
  sectionHeader: `text-[${fontSizeStandards.h2}px] font-bold tracking-[0.2em]`,
  cardHeader: `text-[${fontSizeStandards.h4}px] font-bold`,
  bodyText: `text-[${fontSizeStandards.body}px]`,
  smallText: `text-[${fontSizeStandards.small}px]`,
};

export default {
  fontSizeStandards,
  fontSizeClasses,
  updateFontSizes,
  withStandardFontSize,
  useStandardFontSize,
  standardTextStyles,
};