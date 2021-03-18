import React from 'react';
import styled from 'styled-components';

const PyramidDiv = styled.div`
  display: grid;
`

class Pyramid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
  }

  render() {
    return(
      <PyramidDiv>
        Pyramid goes here  and here and here and ehere and here and here and here and here and here
      </PyramidDiv>
    )
  }
}

export default Pyramid;