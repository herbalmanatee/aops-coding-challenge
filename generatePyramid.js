const generatePyramid = (size) => {
  let pyramid = [];

  while (size > 0) {
    for (let i=0; i<size; i++) {
      pyramid.push(Math.floor(Math.random()* 9) + 1); //generate random # between 1 and 10
    }
    size--;
  }

  return pyramid;
}

console.log(generatePyramid().length);




