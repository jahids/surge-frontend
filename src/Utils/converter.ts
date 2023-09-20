/* eslint-disable @typescript-eslint/no-unused-vars */
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  const truncatedText = text.substring(0, maxLength);
  // Find the last space character within the truncated text
  const lastSpaceIndex = truncatedText.lastIndexOf(' ');
  if (lastSpaceIndex !== -1) {
    // Remove the text after the last space and add ellipsis
    return truncatedText.substring(0, lastSpaceIndex) + '...';
  }
  // If there are no spaces in the truncated text, simply add ellipsis
  return truncatedText + '...';
};