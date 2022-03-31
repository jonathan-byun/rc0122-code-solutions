import React from 'react';
import ReactDOM from 'react-dom/client';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    if (this.state.clicks / 3 < 5) {
      this.setState({
        clicks: this.state.clicks + 1
      });
    }
  }

  render() {
    const clicksByThree = Math.floor(this.state.clicks / 3);
    const color = ['dark-purple', 'blue', 'red', 'orange', 'yellow', 'white'];
    let textColor = 'white';
    if (clicksByThree > 2) {
      textColor = 'black';
    }
    const className = `${color[clicksByThree]} ${textColor}-text`;
    return (
      <button className={className} onClick={this.buttonPress}>
        Hot Button
      </button>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HotButton />);
