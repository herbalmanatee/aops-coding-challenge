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

let solver = (target, matrix) => {
  //let matrix = makeMatrix(arr);
  let solution = '';
  let pathSnapshots = []; //this holds snapshots of the path that the algorithm takes -> needed for visualization
  let solutionSnapshot = [];

  let descendPyramid = (row, product, index, path, move) => {
    //debugger;
    let currentPlace = `row${row}slot${index}`;
    pathSnapshots.push(currentPlace);

    if (row > 0) {
      path.push(move);
    }
    product *= matrix[row][index];

    if (product > target) { // this is uneccesary but will improve time complexity in some situations, particularly large pyramids
      pathSnapshots.push(currentPlace);
      return false;
    }


    if (row === matrix.length - 1) {
      if (product === target) {
        solution = path.join('');
        solutionSnapshot = pathSnapshots;
        return true;
      } else {
        pathSnapshots.push(currentPlace);
        return false;
      }
    }

    for (let i=0; i<2; i++) {
      let direction = '';
      if (i === 0) { //logic for checking left and right child
        direction = 'L'
      } else { //checking right child
        index +=1;
        direction = 'R'
      }

     if (descendPyramid(row+1, product, index, path, direction)) {
       return;
     } else {
       //pathSnapshots.push(currentPlace);
       path.pop();
     }

    }
  }

  descendPyramid(0, 1, 0, []);

  return [solution, solutionSnapshot];
}

export default solver;








// let test = () => {
//   // console.log(makeMatrix([1,2,3,4,1,1]));
//   // console.log(makeMatrix([2,4,3,3,2,6,2,9,5,2,10,5,2,15,5]))
//   console.log(solver(2, [1,2,3,4,1,1]));
//   console.log(solver(720, [2,4,3,3,2,6,2,9,5,2,10,5,2,15,5]));
//   console.log(solver(1, [1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,1,2]));
//   console.log(solver(1, [1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1]));
// }

// test();