// utils/imageUtils.js

export const createSideBySideGif = (leftGif, rightGif, staticImage1, staticImage2) => {
  return {
    type: 'custom-layout',
    leftGif,
    rightGif,
    staticImage1,
    staticImage2
  };
};
