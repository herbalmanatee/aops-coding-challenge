import React from 'react';
import styled from 'styled-components';
import generatePyramid from '../helpers/generatePyramid';
import solver from '../helpers/pyramidDescentMatrix';

const PyramidDiv = styled.div`
  font-size: 60px;
  margin-left: 50%
`
/*
  display: grid;
  grid-template-columns: ${props => `repeat(${props.rows}, auto)`};
  grid-template-rows: ${props => `repeat(${props.rows}, 50px)`};
 */

//pass selected pyramid size as
//make as many rows as input
//make as many columns as input *2 (*2 -1 if input even)
class Pyramid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.solvePyramid = this.solvePyramid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleInteger = this.toggleInteger.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    this.solvePyramid();
  }

  toggleInteger (int) {
    if (int.style.color) {
      int.style.color = ''
    } else {
      int.style.color = 'green'
    }
  }

  solvePyramid () {
    console.log('here');

    //generate a random solution
    let product = 1;
    let rowIndex=0
    this.props.matrix.forEach((row) => {
      product *= row[rowIndex];
      rowIndex++
    })

    let solution = solver(product, this.props.matrix);
    let path = solution[0];
    console.log(product);
    console.log(path);
    let snapshots = solution[1];
    console.log(snapshots);

    snapshots.forEach((snap, i) => {
      setTimeout(() => {

        //document.getElementById(snap).style='color:#f00';
        this.toggleInteger(document.getElementById(snap));
      }, 500*i)
    })
  }

  render() {
    let matrix = this.props.matrix
    //debugger;
    //this.solvePyramid();
    return(
      <PyramidDiv rows={this.props.rows}>
        <button type="button" onClick={this.handleSubmit}></button>
        {matrix.map((row, rowIndex) => {
          return <div id={`row${rowIndex}`} key={rowIndex}>
            {row.map((int, intIndex) => {
              return <span id={`row${rowIndex}slot${intIndex}`} key={intIndex}>{int}</span>
            })}
          </div>
        })}
      </PyramidDiv>
    )
  }
}

export default Pyramid;