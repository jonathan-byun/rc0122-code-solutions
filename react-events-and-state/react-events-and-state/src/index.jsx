import React from 'react';
import ReactDOM from 'react-dom/client';
class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    const clicked = this.state.isClicked;
    let button;
    if (clicked) {
      button = <button>True</button>;
    } else {
      button = <button onClick={this.handleClick}>False</button>;
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<CustomButton />);
