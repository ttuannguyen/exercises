// arrays are sorted
// overlap when:
// arr2[0] > arr1[1]
// arr2[0] === arr1[1]
// returning 2nd number => need to compare arr1[1] vs arr2[2]

function mergeIntervals2(intervals) {
    // Note: if the input is not aleady sorted, we should ahead and sort it
    
    let n = intervals.length;
    if (n === 0) return [];

    // Start building the result with an initial array
    const merged = [intervals[0]];

    for (let i = 1; i < n; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];
        // console.log('current: ' + current, 'lastMerged: ' + lastMerged)
        
        // Comparison to see if they overlap
        if(current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]); // update the end of the last merged interval to be the maximum end value when comparing 2 intervals
        } else {
            merged.push(current); // if they don't overlap, just add the current interval to the result arr
        }
    }

    return merged;
}



// 1st attempt - brute force
// Thought process:
// Mark something as used 
// We should still push elements in order, just that when we get to "used", we need to push the merged array
// Group markings for each merged array 
function mergeIntervals1(intervals) {
    if (intervals.length === 0) return [];

    let n = intervals.length;

    let found = [];
    let used = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            console.log(intervals[i], intervals[j])
            if (intervals[j][0] < intervals[i][1]) {
                found.push(intervals[i][0], intervals[i][1], intervals[j][0], intervals[j][1]);
                used.push(i, j);
            }
        }
    }
    // console.log(used);

    let merged = [Math.min(...found), Math.max(...found)];
    let result = [];

    // result.push(merged)

    for (let i = 0; i < n; i++) {
        if (!used.includes(i)) {
            result.push(intervals[i]);
        }
    }
    // console.log(result);
    return result;
    
}

// debug your code below
console.log(mergeIntervals2([[1,3], [2,6], [8,10], [15,18]]))