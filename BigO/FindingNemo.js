//#1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');

function findNemo2(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
        // uncomment the below to test:
        // console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  // uncomment the below to test:
  // console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(large) // O(n) --> linear time; as the # inputs increase, the # operations increases linearly

// Another example:
const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) => round this down to just O(1)
// very scalable; it doesn't matter how many elements we have, it's going to run the same
