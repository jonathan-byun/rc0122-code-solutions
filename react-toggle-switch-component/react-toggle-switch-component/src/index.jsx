import React from 'react';
import ReactDOM from 'react-dom/client';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false
    };
    this.clickSwitch = this.clickSwitch.bind(this);
  }

  clickSwitch() {
    this.setState({
      activated: !this.state.activated
    });
  }

  render() {
    let switchText = 'OFF';
    let switchClass = 'switch';
    let containerClass = 'container';
    if (this.state.activated) {
      switchText = 'ON';
      switchClass += ' margin-left';
      containerClass += ' background-green';
    }
    return (
      <div className='row'>
        <div className={containerClass} onClick={this.clickSwitch}>
          <div className={switchClass}></div>
        </div>
        <h2>{switchText}</h2>
      </div>

    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Switch />);
