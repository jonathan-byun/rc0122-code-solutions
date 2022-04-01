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
  }

  start() {
    this.timerId = setInterval(
      () => this.tick(), 1000
    );
    this.setState({
      active: !this.state.active
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
          <div className='stopwatch-circle'>
            <h2 className='displayed-time'>{display}</h2>
          </div>
        </div>
        <div className='icon'>
            <i className={this.start.active ? 'fa-solid fa-pause fa-2xl' : 'fa-solid fa-play fa-2xl'} onClick={this.start}></i>
        </div>
      </div>

    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Stopwatch />);
