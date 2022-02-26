export const getDimensions = (cardType, size = 1) => {
  switch (cardType) {
    case 'room':
      return { width: `${251 * size}px`, height: `${184 * size}px` };
    default:
      return { width: `${184 * size}px`, height: `${251 * size}px` };
  }
};
