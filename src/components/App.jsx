import React from 'react';
import Settings from './Settings.jsx';
import Pyramid from './Pyramid.jsx';
import styled from 'styled-components';

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
      placeholder: true
    }
  }

  render() {

    return (
      <Page>
        <Title>Pyramid Descent Algorithm Visualizer</Title>
        <Sidebar>
          <Settings />
        </Sidebar>
        <Main>
          <Pyramid />
        </Main>
      </Page>
    )
  }
}

export default App;