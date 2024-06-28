//#1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo2(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
        // uncomment the below to test:
        console.log('Found NEMO!');
        break; // if condition is met, just break out of the loop
        // Best case: Nemo is at the beginning
        // Worst case: Nemo is at the end
    }
  }
  let t1 = performance.now();
  // uncomment the below to test:
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(large) // O(n) --> linear time; as the # inputs increase, the # operations increases linearly

// Example #2:
const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    // console.log(boxes[0]); // O(1)
    // console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) => round this down to just O(1)
// very scalable; it doesn't matter how many elements we have, it's going to run the same

// Example #3: Rule #3 Different terms for inputs
// Just bc we're seeing 2 for loops, doesn't mean they're looping over the same item
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) { // O(n)
        console.log(boxes);
    })

    boxes2.forEach(function(boxes) { // O(n)
        console.log(boxes);
    })
}
// Result: O(a + b) or O(n + n) => O(2n) => O(n)

// Example #4: when dealing with nested loops, you multiple =>  O(n^2) i.e. quadratic time 

// Example 5: Drop non dominants
function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach(function(number) { // O(n)
      console.log(number);
    });
  
    console.log("and these are their sums:");
    numbers.forEach(function(firstNumber) { // O(n^2) bc nested loop
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  }

  printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2)
  // Result: O(n + n^2) => dropping non dominants => O(n^2)
  // E.g.) O(x^2+3x+100+x/2) => O(x^2)

  // Note: worst one of all time O(n!)