function findScheduleConflicts(times) {
    // Leverage built-in sort method of JavaScript
    times.sort((a, b) => a[0] - b[0])
    const conflicts = new Set();

    // Implement a comparison 
    for (let i = 0; i < times.length - 1; i++) {
        let a = times[i];
        let b = times[i+1];

        if (b[0] < a[1]) {
            conflicts.add(a);
            conflicts.add(b);
        }
    }
    
    const result = conflicts.values();
    return result;
    
}

const times = [[2,3], [1,2], [3,5], [4,6]];
findScheduleConflicts(times)