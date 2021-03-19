const generatePyramid = (size) => {
  //helper function turns pyramid into matrix with pyramid dimensions
  let makeMatrix = (arr) => {
    let row = 1; //represents the length of the pyramid row
    let matrix = [];

    while (arr.length > 0) {
      matrix.push(arr.splice(0,row));
      row++;
    }

    return matrix;
  }

  let pyramid = [];

  while (size > 0) {
    for (let i=0; i<size; i++) {
      pyramid.push(Math.floor(Math.random()* 9) + 1); //generate random # between 1 and 10
    }
    size--;
  }

  return makeMatrix(pyramid);
}

// console.log((generatePyramid(20).length));

export default generatePyramid;




