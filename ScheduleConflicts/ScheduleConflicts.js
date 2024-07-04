function findScheduleConflicts(times) {
    // Leverage built-in sort method of JavaScript
    times.sort((a, b) => a[0] - b[0]) // O(n log n)
    const conflicts = new Set(); 

    // Implement a comparison 
    for (let i = 0; i < times.length - 1; i++) { // O(n)
        let a = times[i];
        let b = times[i+1];

        if (b[0] < a[1]) {
            conflicts.add(a); // O(1)
            conflicts.add(b); // O(1)
        }
    }
    
    const result = conflicts.values(); // // O(n)
    return result;

    // Time complexity: O(nlogn)+O(n)+O(n)=O(nlogn)
    // Space complexity: O(n)
    
}

const times = [[2,3], [1,2], [3,5], [4,6]];
findScheduleConflicts(times)