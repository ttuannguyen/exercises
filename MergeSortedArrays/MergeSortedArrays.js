const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }

  // Task: Split Array in into right and left

  // JavaScript's slice method: 
  // Returns A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 

  const half = Math.ceil(numbers.length/2);
  const left = numbers.slice(0, half); // trim from index a to index b
  const right = numbers.slice(half); // cut anything before the index position indicated ;

  // Using bubble sort to sort "left" array
  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < left.length - 1 - i; j++) {
        if(left[j] >= left[j + 1]) {
            let temp = left[j];
            left[j] = left[j + 1];
            left[j + 1] = temp;
        }
    }
  }

  // Using bubble sort to sort "left" array
  for (let i = 0; i < right.length; i++) {
    for (let j = 0; j < right.length - 1 - i; j++) {
        if(right[j] >= right[j + 1]) {
            let temp = right[j];
            right[j] = right[j+1];
            right[j+1] = temp;
        }
    }
  }

  console.log(left);
  console.log(right)

let result = [];

for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
        console.log(i, j, left[i], right[j])
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } 
        else {
            if(!result.includes(right[j])) {
                result.push(right[j]);
            }
        }
        console.log(result);
    }
}

// console.log(result);

//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )



}

// function merge(left, right){
// }


const answer = mergeSort(numbers);
// console.log(answer);

