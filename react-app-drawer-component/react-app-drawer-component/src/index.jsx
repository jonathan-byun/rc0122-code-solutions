import React from 'react';
import ReactDOM from 'react-dom/client';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.className === 'modal-button' || e.target.id === 'modal') {
      this.setState({
        open: false
      });
      return;
    }
    if (e.target.id === 'open-modal-button') {
      this.setState({
        open: true
      });
    }
  }

  render() {
    let displayClass = 'hidden';
    if (this.state.open) {
      displayClass = '';
    }
    const modalClass = 'modal ' + displayClass;
    return (
      <div onClick={this.handleClick}>
        <i id='open-modal-button' className="fa-solid fa-bars fa-xl"></i>
        <div id='modal' className={modalClass}>
          <div className='modal-content'>
            <h2 className='menu'>Menu</h2>
            <div className='modal-button'>About</div>
            <div className='modal-button'>Get Started</div>
            <div className='modal-button'>Sign In</div>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppDrawer />);
