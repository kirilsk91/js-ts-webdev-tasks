export const truncateText = (
  text: string,
  maxTextLength: number = 30
): string => {
  if (text.length <= maxTextLength) {
    return text;
  }
  return text.slice(0, maxTextLength) + '...';
};
