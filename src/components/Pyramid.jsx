import React from 'react';
import styled from 'styled-components';
import generatePyramid from '../helpers/generatePyramid';
import solver from '../helpers/pyramidDescentMatrix';

const PyramidDiv = styled.div`
  font-size: 40px;
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

  }

  solvePyramid () {
    solver(10, this.props.matrix);
  }

  render() {
    let matrix = this.props.matrix
    //debugger;
    this.solvePyramid();
    return(
      <PyramidDiv rows={this.props.rows}>
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