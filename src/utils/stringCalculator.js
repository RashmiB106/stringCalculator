export const add = (numbers) => {
  if (!numbers) return 0;

  let delimiter = ',';
  let numbersToProcess = numbers;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    // Handle the literal "\n" in the custom delimiter section
    const parts = numbers.split('\\n');
    if (parts.length >= 2) {
      const customDelimiter = parts[0].substring(2); // Remove '//'
      numbersToProcess = parts.slice(1).join(',');
      delimiter = customDelimiter;
    }
  }

  // Handle remaining literal "\n" characters
  numbersToProcess = numbersToProcess.replace(/\\n/g, delimiter);

  // Split by delimiter and process numbers
  const nums = numbersToProcess
    .split(delimiter)
    .map(num => num.trim())
    .filter(num => num.length > 0)
    .map(num => parseInt(num));

  // Check for negative numbers
  const negativeNums = nums.filter(num => num < 0);
  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(',')}`);
  }

  // Sum valid numbers
  return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
};