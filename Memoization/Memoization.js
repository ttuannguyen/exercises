function addTo80(n) {
    console.log('long time');
    return n + 80;
}

let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = n + 80;
    }
}

console.log(addTo80(5));