import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: null
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    const array = e.target.value.split(' ');

    this.setState({ array });
  }

  // handleClick(e){
  //   console.log(e);
  // }

  render() {
    const { array } = this.state;
    return (
      <div>
        <input onChange={this.handleChange} value={array} />
        <button type="submit">Send my Array</button>
      </div>
    );
  }
};

