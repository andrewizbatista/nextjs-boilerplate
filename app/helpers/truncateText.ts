/**
 * Truncate a text longer than {maxLength} characters and append an ellipsis.
 */
export default (text: string, maxLength: number): string => {
  const ellipsis = '...';

  if (text.length < maxLength) return text;

  return text.substring(0, maxLength - ellipsis.length) + ellipsis;
};
