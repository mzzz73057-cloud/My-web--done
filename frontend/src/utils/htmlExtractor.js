/**
 * Extracts vocabulary and corresponding image paths from an HTML string
 * based on standard structured lesson files.
 * @param {string} htmlContent - The raw HTML string.
 * @returns {Array} An array of objects: { id, word, image }
 */
export const extractDataFromLesson = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  const extractedData = [];
  
  // We'll look for common structures. Many simple lesson html files use divs or li elements with an img and some text.
  // We will search for all images, and for each image, try to find a closely related text Node.
  const images = doc.querySelectorAll('img');
  
  images.forEach((img, index) => {
    // Exclude layout graphics if any, usually valid lesson assets have distinct paths or classes.
    // Try to find the closest wrapper
    const parentBlock = img.closest('div, li, figure, section, article') || img.parentElement;
    
    if (parentBlock) {
      // Find texts inside the parent block, ignoring scripts/styles
      const textNodes = Array.from(parentBlock.childNodes)
        .filter(node => node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE')
        .map(node => node.textContent?.trim())
        .filter(text => text && text.length > 0 && text.length < 50); // Filter out huge blocks of text
        
      if (textNodes.length > 0) {
        // Assume the most prominent short text is the vocabulary word
        const word = textNodes[0].replace(/[\n\r]+/g, ' ').trim();
        
        extractedData.push({
          id: `item-${index}`,
          word: word,
          image: img.getAttribute('src') || ''
        });
      }
    }
  });

  // Remove duplicates based on word
  const uniqueData = Array.from(new Map(extractedData.map(item => [item.word.toLowerCase(), item])).values());
  
  return uniqueData;
};

/**
 * Validates spoken text against the target vocabulary using a simple Levenshtein distance 
 * for string similarity (since speech recognition confidence can be unreliable).
 */
export const calculatePronunciationScore = (spokenText, targetWord) => {
  const cleanSpoken = spokenText.toLowerCase().replace(/[^\w\s]|_/g, "").trim();
  const cleanTarget = targetWord.toLowerCase().replace(/[^\w\s]|_/g, "").trim();
  
  if (cleanSpoken === cleanTarget) return 1.0;
  
  // Basic Levenshtein distance
  const matrix = Array(cleanSpoken.length + 1).fill().map(() => Array(cleanTarget.length + 1).fill(0));
  
  for (let i = 0; i <= cleanSpoken.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= cleanTarget.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= cleanSpoken.length; i++) {
    for (let j = 1; j <= cleanTarget.length; j++) {
      if (cleanSpoken[i - 1] === cleanTarget[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  const maxLen = Math.max(cleanSpoken.length, cleanTarget.length);
  if (maxLen === 0) return 0;
  
  const distance = matrix[cleanSpoken.length][cleanTarget.length];
  return (maxLen - distance) / maxLen;
};
