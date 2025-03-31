function intervalsOverlap(first, second) {
    // Ensure first interval starts before the second
    if (first[0] > second[0]) {
      [first, second] = [second, first];
    }
    // Check if first interval ends after the second interval starts
    return first[1] >= second[0];
  }
  
  function mergeIntervals(intervals) {
    if (intervals.length === 0) {
      return [];
    }
  
    // Sort intervals by the start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Initialize the result array with the first interval
    const result = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = result[result.length - 1];
      const nextInterval = intervals[i];
  
      // If the current interval overlaps with the next interval, merge them
      if (currentInterval[1] >= nextInterval[0]) {
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      } else {
        // Otherwise, add the next interval to the result
        result.push(nextInterval);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const intervals = [[1, 3], [2, 6], [5, 10], [15, 18], [16, 20]];
  const mergedIntervals = mergeIntervals(intervals);
  console.log(mergedIntervals); 