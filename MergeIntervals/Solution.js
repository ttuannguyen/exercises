// arrays are sorted
// overlap when:
// arr2[0] > arr1[1]
// arr2[0] === arr1[1]

// returning 2nd number => compare arr1[1] vs arr2[2]


function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    let n = intervals.length;
    let x = 0;
    let y = 0;
    
    // while (i < n || j < n) {
    // }

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

    console.log(used);

    let merged = [Math.min(...found), Math.max(...found)];

    let result = [];

    result.push(merged)

    for (let i = 0; i < n; i++) {
        if (!used.includes(i)) {
            result.push(intervals[i]);
        }
    }

    console.log(result);


    
    
}

// debug your code below
console.log(mergeIntervals([[1,3], [2,6], [8,10], [15,18]]))