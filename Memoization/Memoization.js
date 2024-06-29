function addTo80(n) {
    console.log('long time');
    return n + 80;
}

// let cache = {}; // bring this inside the function below to avoid global scope

function memoizedAddTo80(n) {
    let cache = {}; // the cache gets reset each time so we use closure by returning another function
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80(); // now returns the result from the function inside the memoizedAddTo80() function

console.log('1', addTo80(5));
console.log('2', addTo80(6));