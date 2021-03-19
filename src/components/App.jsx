import React from 'react';
import Settings from './Settings.jsx';
import Pyramid from './Pyramid.jsx';
import styled from 'styled-components';
import generatePyramid from '../helpers/generatePyramid';

const Page = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: "title title title title"
                       "settings pyramid pyramid pyramid";
`

const Sidebar = styled.div`
  margin-left: 25px;
  grid-area: settings;
`
const Main = styled.div`
  grid-area: pyramid;
`

const Title = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-area: title;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 3,
      matrix: [[1], [2,3], [4,5,6]]
    }

    this.setRows = this.setRows.bind(this);
    this.getPyramid = this.getPyramid.bind(this);
  }

  setRows (rows) {
    this.setState({
      rows: rows
    })
    this.getPyramid(rows);
  }

  getPyramid (rows) {
    let pyramidInput = generatePyramid(rows);
    this.setState({
      matrix: pyramidInput
    })
  }

  render() {

    return (
      <Page>
        <Title>Pyramid Descent Algorithm Visualizer</Title>
        <Sidebar>
          <Settings setRows={this.setRows} />
        </Sidebar>
        <Main>
          <Pyramid matrix={this.state.matrix} rows={this.state.rows}/>
        </Main>
      </Page>
    )
  }
}

export default App;