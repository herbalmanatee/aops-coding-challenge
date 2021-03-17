/*
  A pyramid descent puzzle consists of a pyramid of positive integers. To solve the puzzle you must fnid a path that traverses the pyraid from top to bottom visiting numbers whose profuct is a given target value. Each step in the path must go down one row, and go either one step to the left or one step to the right.

  For example suppose the pyramid below has a target value of 2

               1
              2 3
             4 1 1
  A solver for this puzzle should output LR, indicating that the correct path starts from the 1 on top, goes Left to the 2 on the second row, then goes Right to the 1 in the center of the bottom row. (Note in particular that the successful path cannot go through the 1 at the end of the bottom row).

  In your language of choice, write a solver that can solve any pyramid descent puzzle. Your solver can assume that every input pyramid has a first row with one number and every row thereafter has one more number than the row above. Each row is aligned such that the center of the row aligns with the midline of the pyramid ( as shown in the samples above and below).

  Below is a sample pyramid with target 720 along with the sample program input and output for this puzzle

               2
              4 3
             3 2 6
            2 9 5 2
          10 5 2 15 5

  Sample Input:
    Target: 720,
    [
      2,
      4,3
      3,2,6,
      2,9,5,2,
      10,5,2,15,5
    ]

  Sample Output: LRLL
*/

//function takes array of integers
//returns matrix of integers with pyramid dimensions
let makeMatrix = (arr) => {
  let row = 1; //represents the length of the pyramid row
  let matrix = [];

  while (arr.length > 0) {
    matrix.push(arr.splice(0,row))
    row++;
  }

  return matrix;
}


let test = () => {
  console.log(makeMatrix([1,2,3,4,1,1]));
  console.log(makeMatrix([2,4,3,3,2,6,2,9,5,2,10,5,2,15,5]))
}

test();