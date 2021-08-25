import React, { Component } from 'react';
import './Clock.scss';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="clock__wrapper">
        <h1 className="clock__title">{this.props.title}</h1>
        <p className="clock__face">{this.state.time}</p>
      </div>
    );
  }
}
