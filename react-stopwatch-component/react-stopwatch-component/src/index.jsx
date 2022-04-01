import React from 'react';
import ReactDOM from 'react-dom/client';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      active: false
    };
    this.formatTime = this.formatTime.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    this.timerId = setInterval(
      () => this.tick(), 1000
    );
    this.setState({
      active: true
    });
  }

  stop() {
    clearInterval(this.timerId);
    this.setState({
      active: false
    });
  }

  reset() {
    this.setState({
      time: 0
    });
  }

  tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  formatTime(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

  render() {
    const seconds = this.formatTime(this.state.time % 60);
    const minutes = this.formatTime(Math.floor(this.state.time / 60) % 60);
    const hours = this.formatTime(Math.floor(this.state.time / 3600));
    const display = `${hours}:${minutes}:${seconds}`;
    return (
      <div className='container'>
        <div className='watchface-container'>
          <div className='stopwatch-circle' onClick={ !this.state.active && this.reset}>
            <h2 className='displayed-time'>{display}</h2>
          </div>
        </div>
        <div className='icon'>
            <i className={this.state.active ? 'fas fa-pause fa-2xl' : 'fas fa-play fa-2xl'} onClick={this.state.active ? this.stop : this.start}></i>
        </div>
      </div>

    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Stopwatch />);
