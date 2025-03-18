// utils/FontStandardizer.js
import React from 'react';

const fontSizeStandards = {
  h1: 56,    // Main headers (was 48px)
  h2: 48,    // Section headers (was 40px)
  h3: 40,    // Sub-section headers (was 32px)
  h4: 34,    // Card headers (was 28px)
  body: 26,  // Regular text (was 20px)
  small: 22, // Small text (was 16px)
  tiny: 18   // Very small text (was 14px)
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
