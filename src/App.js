import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import 'react-dropdown/style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { people: [] };

    this.handleClick.bind(this)
  }

  handleClick() {
    axios.get('http://localhost:5000/odata/Book')
      .then(response => {
        console.log(response.data)
        this.setState({ people: response.data })

      })
  }

  render() {
    const dep = [
      'SEDO', 'DSAO', 'QADO'
    ]
    const loc = [
      'Lviv', 'Kiev', 'Franik'
    ]

    const title = [
      'Senior', 'Mid', 'Jun'
    ]

    const spec = [
      'back-end', 'front-end', 'data science'
    ]

    return (
      <div className="App">
        <div className="filter-selector">
          <label>Department</label>
          <Dropdown options={dep} onChange={this._onSelect} placeholder="Select an option" />
          <label>Location</label>
          <Dropdown options={loc} onChange={this._onSelect} placeholder="Select an option" />
          <label>Title</label>
          <Dropdown options={title} onChange={this._onSelect} placeholder="Select an option" />
          <label>Specialization</label>
          <Dropdown options={spec} onChange={this._onSelect} placeholder="Select an option" />

          <Button onClick={this.handleClick}>Apply</Button>
        </div>
        <div className="people-container">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>

              {this.state.people.map(t =>
                <div>
                  <Table.Row>
                    <Table.Cell>
                      {t.mame}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {t.authorId}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {t.publisherId}
                    </Table.Cell>
                  </Table.Row>
                </div>
              )}

            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
