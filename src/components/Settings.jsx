import React from 'react';
import styled from 'styled-components';

const SettingsBar = styled.div`
  display: flex;
`

class Settings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rows: 2
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      rows: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.setRows(this.state.rows);
  }

  render() {
    return (
      <SettingsBar>
        <form onSubmit={this.handleSubmit}>
          <label>
            How Many Rows In Your Pyramid?
            <input type="text" value={this.state.rows} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit"/>
        </form>
      </SettingsBar>
    )}
}



export default Settings;