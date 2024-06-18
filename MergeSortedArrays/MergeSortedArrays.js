const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }

  // Task: Split Array in into right and left


  // JavaScript's slice method: 
  // Returns A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 

  const half = Math.ceil(numbers.length/2);
  const firstHalf = numbers.slice(0, half); // trim from index a to index b
  console.log(firstHalf);
  const secondHalf = numbers.slice(half); // cut anything before this index 
  console.log(secondHalf);

//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
}

// function merge(left, right){

// }


const answer = mergeSort(numbers);
console.log(answer);